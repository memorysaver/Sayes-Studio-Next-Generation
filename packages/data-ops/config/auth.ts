import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import Database from 'better-sqlite3'

import { createBetterAuth } from '../src/auth/setup'

export const auth = createBetterAuth({
	database: drizzleAdapter(new Database('./config/test.sqlite'), {
		provider: 'sqlite',
	}),
})
