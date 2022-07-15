import GettingStartedSvelte from './GettingStarted.svelte'
import Loader from './Loader.svelte'
export const Routes = {
	'/': GettingStartedSvelte,
	'/loader/:type': Loader,

	// '*': PageNotFound,
}
