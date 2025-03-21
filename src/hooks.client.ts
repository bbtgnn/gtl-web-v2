import type { ClientInit } from '@sveltejs/kit';
import Worker from '$lib/worker?worker';
import { appState } from '$lib/state.svelte';
import * as Comlink from 'comlink';
import type { WorkerApi } from '$lib/worker';

//

export const init: ClientInit = async () => {
	const worker = new Worker();
	appState.worker = Comlink.wrap<WorkerApi>(worker);
};
