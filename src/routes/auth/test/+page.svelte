<script lang="ts">
  import SignIn from "clerk-sveltekit/client/SignIn.svelte";
  import SignedIn from "clerk-sveltekit/client/SignedIn.svelte";
  import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte'
  import UserButton from 'clerk-sveltekit/client/UserButton.svelte'
</script>


<SignedIn>
  <UserButton  afterSignOutUrl="/home"/>
</SignedIn>

<SignedOut>
	<a href="/sign-in">Sign in</a> <span>|</span> <a href="/sign-up">Sign up</a>
</SignedOut>