<script>
	import { appState } from '$lib/state.svelte';
	import { onMount } from 'svelte';
	import py from './test.py?raw';

	onMount(async () => {
		const res = await appState.worker?.runPython(py, {});

		if (res instanceof Uint8Array) {
			// Create a blob from the Uint8Array with zip mime type
			const blob = new Blob([res], { type: 'application/zip' });

			// Create a URL for the blob
			const blobUrl = URL.createObjectURL(blob);

			// Create a temporary link element
			const link = document.createElement('a');
			link.href = blobUrl;
			link.download = 'font.zip'; // Name the downloaded file

			// Append to the document, click it, and remove it
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			// Clean up the blob URL
			URL.revokeObjectURL(blobUrl);
		}

		console.log(res);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
