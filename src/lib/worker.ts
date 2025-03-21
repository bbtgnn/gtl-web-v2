// @ts-expect-error Untyped URL
import { loadPyodide } from 'https://cdn.jsdelivr.net/pyodide/v0.27.4/full/pyodide.mjs';
import type { loadPyodide as lp } from 'pyodide';

const pyodideReadyPromise = (loadPyodide as typeof lp)();

self.onmessage = async (event) => {
	// make sure loading is done
	const pyodide = await pyodideReadyPromise;
	const { id, python, context } = event.data;
	// Now load any packages we need, run the code, and send the result back.
	await pyodide.loadPackagesFromImports(python);
	// make a Python dictionary with the data from `context`
	const dict = pyodide.globals.get('dict');
	const globals = dict(Object.entries(context));
	try {
		// Execute the python code in this context
		const result = await pyodide.runPythonAsync(python, { globals });
		self.postMessage({ result, id });
	} catch (error) {
		self.postMessage({ error: (error as Error).message, id });
	}
};
