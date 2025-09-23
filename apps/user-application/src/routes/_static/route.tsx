import { createFileRoute, Outlet } from '@tanstack/react-router'

import { Navbar } from '@/components/common/navbar'

export const Route = createFileRoute('/_static')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />

			<Outlet />
		</div>
	)
}
