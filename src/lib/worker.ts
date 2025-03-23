import { init, Wasmer } from '@wasmer/sdk';

import * as Comlink from 'comlink';

//

const api = {
	runPython: async (python: string, context: Record<string, unknown>) => {
		console.log('runPython', python, context);

		await init();

		const pkg = await Wasmer.fromRegistry('python/python');
		const instance = await pkg.entrypoint?.run({
			args: ['-c', "print('Hello, World!')"]
		});
		if (!instance) {
			throw new Error('Failed to create instance');
		}

		const { code, stdout } = await instance.wait();
		console.log(`Python exited with ${code}: ${stdout}`);
	}
};

export type WorkerApi = typeof api;

Comlink.expose(api);
