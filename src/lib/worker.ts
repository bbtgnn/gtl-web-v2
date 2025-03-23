import * as Comlink from 'comlink';

import font from './font.wasm?url';

const api = {
	makeFont: async (name: string) => {
		const module = await WebAssembly.instantiateStreaming(fetch(font), {});
		console.log(module);
		// const instance = new WebAssembly.Instance(module);
		// const result = instance.exports.makeFont(name);
		// return result;
	}
};

export type WorkerApi = typeof api;

Comlink.expose(api);
