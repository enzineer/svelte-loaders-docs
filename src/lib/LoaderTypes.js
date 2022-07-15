import {
	BallTriangle,
	Bars,
	Grid,
	InfinitySpin,
	MutatingDots,
	Oval,
	RevolvingDot,
	Rings,
	RotatingSquare,
	TailSpin,
	ThreeDots,
	Triangle,
	Watch,
} from 'svelte-loaders'
import * as LoaderDefaults from 'svelte-loaders/defaults'
const _defaults = { visible: true, height: 100, width: 100, color: '#16a085' }
export const LoaderTypes = {
	BallTriangle: { component: BallTriangle, defaults: { ..._defaults } },
	Bars: { component: Bars, defaults: { ..._defaults } },
	Grid: { component: Grid, defaults: { ..._defaults } },
	InfinitySpin: { component: InfinitySpin, defaults: { ..._defaults } },
	MutatingDots: { component: MutatingDots, defaults: { ..._defaults } },
	Oval: { component: Oval, defaults: { ..._defaults } },
	RevolvingDot: { component: RevolvingDot, defaults: { ..._defaults } },
	Rings: { component: Rings, defaults: { ..._defaults } },
	RotatingSquare: { component: RotatingSquare, defaults: { ..._defaults } },
	TailSpin: { component: TailSpin, defaults: { ..._defaults } },
	ThreeDots: { component: ThreeDots, defaults: { ..._defaults } },
	Triangle: { component: Triangle, defaults: { ..._defaults } },
	Watch: { component: Watch, defaults: { ..._defaults } },
}
export const GetDefaults = (type) => LoaderDefaults[type]
