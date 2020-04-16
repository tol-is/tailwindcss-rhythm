import { Theme } from '@styled-rhythm/types';
import { get, is, pxToRem } from '@styled-rhythm/utils';
import {
	matrix,
	cell,
	matrixGap,
	matrixGapX,
	matrixGapY,
} from '@styled-rhythm/core';

import replace from './lib/replace-rule';
import getRhythm from './lib/get-rhythm';

export const matrixPlugin = (css: any, theme: Theme, result: any) => {
	//
	const getRhythmValue = getRhythm(theme);

	css.walkDecls(decl => {
		const { prop, value } = decl;

		if (prop === 'matrix') {
			replace(decl, matrix({ columns: value }));
			return;
		}

		if (prop === 'cell') {
			const [first, second] = value.split('/');

			let start = first;
			let span = second;
			if (!is.exists(second)) {
				start = undefined;
				span = first;
			}
			replace(decl, cell({ start, span }));
			return;
		}

		if (prop === 'matrix-gap') {
			replace(decl, matrixGap({ space: getRhythmValue(value) }));
			return;
		}

		if (prop === 'matrix-gap-x') {
			replace(decl, matrixGapX({ space: getRhythmValue(value) }));
			return;
		}

		if (prop === 'matrix-gap-y') {
			replace(decl, matrixGapY({ space: getRhythmValue(value) }));
			return;
		}
	});
};

export default matrixPlugin;