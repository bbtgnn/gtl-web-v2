// @ts-expect-error Url imports are not typed
import { loadPyodide } from 'https://cdn.jsdelivr.net/pyodide/v0.27.4/full/pyodide.mjs';
import type { loadPyodide as LoadPyodide } from 'pyodide';

import * as Comlink from 'comlink';

//

const pyodideReadyPromise = (loadPyodide as typeof LoadPyodide)();

const api = {
	runPython: async (python: string, context: Record<string, unknown>) => {
		// make sure loading is done
		const pyodide = await pyodideReadyPromise;
		// Now load any packages we need, run the code, and send the result back.
		await pyodide.loadPackagesFromImports(python);
		await pyodide.loadPackage('micropip');
		// make a Python dictionary with the data from `context`
		const dict = pyodide.globals.get('dict');
		const globals = dict(Object.entries(context));
		try {
			const result = await pyodide.runPythonAsync(python, { globals });
			return result ?? 12;
		} catch (error) {
			console.error(error);
			if (!(error instanceof Error)) return 'Unknown error';
			return error.message;
		}
	}
};

export type WorkerApi = typeof api;

Comlink.expose(api);
