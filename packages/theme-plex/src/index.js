const root = 16;
const baseline = 8;

const breakpoints = [
	{ key: 'sm', width: 512 },
	{ key: 'md', width: 960 },
	{ key: 'lg', width: 1280 },
	{ key: 'xl', width: 1440 },
	{ key: 'xxl', width: 1760 },
];

// type scale in px
const type = [
	14,
	16,
	18,
	20,
	22,
	24,
	28,
	32,
	36,
	40,
	44,
	48,
	54,
	60,
	66,
	72,
	80,
	88,
	96,
	104,
];

// rhythm scale in baseline units
const rhythm = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	8,
	10,
	12,
	16,
	21,
	24,
	28,
	32,
	36,
	40,
	48,
	56,
];

// measure scale in characters unit
const measure = [12, 16, 20, 24, 28, 36, 44, 52, 60, 68, 84];

// leading scale in baseline units
const leading = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const matrixSize = 24;

// font config
const fonts = [
	{
		key: 'sans-400',
		familyName: 'IBM Plex Sans',
		fallback: 'sans-serif',
		upm: 1000,
		xHeight: 525,
		capHeight: 698,
		ascent: 1025,
		descent: -275,
		weight: 400,
		italic: false,
	},
	{
		key: 'sans-400i',
		familyName: 'IBM Plex Sans',
		fallback: 'sans-serif',
		upm: 1000,
		xHeight: 525,
		capHeight: 698,
		ascent: 1025,
		descent: -275,
		weight: 400,
		italic: true,
	},
	{
		key: 'sans-700',
		familyName: 'IBM Plex Sans',
		fallback: 'sans-serif',
		upm: 1000,
		xHeight: 525,
		capHeight: 698,
		ascent: 1025,
		descent: -275,
		weight: 700,
		italic: false,
	},
	{
		key: 'sans-700i',
		familyName: 'IBM Plex Sans',
		fallback: 'sans-serif',
		upm: 1000,
		xHeight: 525,
		capHeight: 698,
		ascent: 1025,
		descent: -275,
		weight: 700,
		italic: true,
	},
];

const colors = {
	mono: [
		'#FFFFFF',
		'#F4F4F4',
		'#E9E9E9',
		'#D9D9D9',
		'#C5C5C5',
		'#AAAAAA',
		'#878787',
		'#5E5E5E',
		'#303030',
		'#121212',
		'#000000',
	],
};

module.exports = {
	useRem: true,
	breakpoints,
	colors,
	baseline,
	root,
	type,
	rhythm,
	measure,
	leading,
	matrixSize,
	fonts,
};
