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
	BarsCircle,
	Ball,
	GearSet,
	DualRing,
	RotatingDots,
	Whirl,
} from 'svelte-loaders'
import * as LoaderDefaults from 'svelte-loaders/defaults'
export const LoaderTypes = {
	Ball,
	BallTriangle,
	Bars,
	BarsCircle,
	DualRing,
	GearSet,
	Grid,
	InfinitySpin,
	MutatingDots,
	Oval,
	RevolvingDot,
	Rings,
	RotatingDots,
	RotatingSquare,
	TailSpin,
	ThreeDots,
	Triangle,
	Watch,
	Whirl,
}
export const rawDefaults = LoaderDefaults

export const GetDefaults = (type) => {
	let _defaults = { ...LoaderDefaults[type] }
	if ('secondaryColor' in _defaults) {
		_defaults.secondaryColor = '#ff3e00'
	}
	return _defaults
}
