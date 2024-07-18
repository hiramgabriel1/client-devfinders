import type { HandleClientError } from '@sveltejs/kit'
import { initializeClerkClient } from 'clerk-sveltekit/client'
import { AUTH_KEYS } from '../routes/utils/config'

initializeClerkClient(AUTH_KEYS.PUBLIC_CLERK_PUBLISHABLE_KEY, {
	afterSignInUrl: '/home/',
	afterSignUpUrl: '/home/',
	signInUrl: '/auth/test/',
	signUpUrl: '/auth/test/',
})

export const handleError: HandleClientError = async ({ error, event }) => {
	console.error(error, event)
}