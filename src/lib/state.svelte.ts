import type { WorkerApi } from './worker';
import * as Comlink from 'comlink';

//

type AppState = {
	worker: Comlink.Remote<WorkerApi> | undefined;
};

export const appState = $state<AppState>({
	worker: undefined
});
