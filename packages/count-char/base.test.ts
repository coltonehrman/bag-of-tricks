/* eslint-disable @typescript-eslint/no-unsafe-call */
import {expect, test} from 'vitest';
import {countChar} from './index.js';

test('countChar', () => {
	expect(countChar('abc', 'a')).toBe(1);
	expect(countChar('abc', 'b')).toBe(1);
	expect(countChar('abc', 'c')).toBe(1);
	expect(countChar('abc', 'd')).toBe(0);
});
