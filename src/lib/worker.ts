import * as Comlink from 'comlink';

const api = {
	makeFont: async (name: string) => {
		console.log('makeFont', name);
	}
};

export type WorkerApi = typeof api;

Comlink.expose(api);
