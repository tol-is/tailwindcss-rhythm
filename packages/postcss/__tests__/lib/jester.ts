import theme from '@styled-rhythm/theme-test';
import { stripcss } from '@styled-rhythm/utils';

import postcss from 'postcss';
import styledRhythmPostcss from '../../src';

const createPostCSSConfig = (theme, input) => {
	return postcss([styledRhythmPostcss(theme)])
		.process(input, {
			from: undefined,
		})
		.then(({ css }) => {
			return css;
		});
};

export const matcher = (input, result) =>
	createPostCSSConfig(theme, input).then(css => {
		expect(stripcss(css)).toBe(stripcss(result));
	});

export const logger = input =>
	createPostCSSConfig(theme, input).then(css => {
		console.log(css);
		expect(true).toBe(true);
	});

export default matcher;