import { getProducts, getUserSubscription } from "@/server/functions/payments";
import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PricingGrid, useCheckout } from "@/components/payments/polar";

export const Route = createFileRoute("/_authed/app/polar/subscriptions")({
  component: RouteComponent,
  loader: async ({ context }) => {
    await Promise.all([
      context.queryClient.prefetchQuery({
        queryKey: ["products"],
        queryFn: getProducts,
      }),
      context.queryClient.prefetchQuery({
        queryKey: ["subscription"],
        queryFn: getUserSubscription,
      }),
    ]);
  },
});

function RouteComponent() {
  const { data: products } = useSuspenseQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    refetchOnWindowFocus: true,
  });

  const { data: subscription } = useSuspenseQuery({
    queryKey: ["subscription"],
    queryFn: getUserSubscription,
    refetchOnWindowFocus: true,
  });

  const { redirectToCheckout, isCheckoutPending } = useCheckout();

  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-muted-foreground">
          Select the perfect plan for your needs
        </p>
      </div>

      <PricingGrid
        products={products}
        subscription={subscription}
        onCheckout={redirectToCheckout}
        isCheckoutPending={isCheckoutPending}
      />
    </div>
  );
}
