import type { Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'
import { handleClerk } from 'clerk-sveltekit/server'
import { AUTH_KEYS } from '../routes/utils/config'

export const handle: Handle = sequence(
	handleClerk(AUTH_KEYS.CLERK_SECRET_KEY, {
		debug: true,
		protectedPaths: ['/home'],
		signInUrl: '/auth/test/',
	})
)