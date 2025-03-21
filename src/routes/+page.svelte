<script>
	import { appState } from '$lib/state.svelte';
	import { onMount } from 'svelte';
	import py from './test.py?raw';

	onMount(async () => {
		const res = await appState.worker?.runPython(py, {});
		console.log(res);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
