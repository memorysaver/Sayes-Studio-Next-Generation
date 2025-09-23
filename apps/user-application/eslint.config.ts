import { defineConfig } from '@repo/eslint-config'
import { getReactConfig } from '@repo/eslint-config/react'

const reactConfig = getReactConfig(import.meta.url)

export default defineConfig([
	...reactConfig,
	{
		ignores: ['**/routeTree.gen.ts', 'vite.config.ts'],
	},
])
