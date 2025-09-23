import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	optimizeDeps: {
		exclude: ['fsevents'],
	},
	environments: {
		ssr: {
			build: {
				rollupOptions: {
					preserveEntrySignatures: 'strict',
				},
			},
		},
	},
	server: {
		port: 3000,
		allowedHosts: ['ef54240d0784.ngrok-free.app'],
	},
	plugins: [
		cloudflare({
			viteEnvironment: { name: 'ssr' },
			experimental: {
				remoteBindings: true,
			},
		}),
		tsConfigPaths({
			projects: ['./tsconfig.json'],
		}),
		tailwindcss(),
		tanstackStart(),
		viteReact(),
	],
})
