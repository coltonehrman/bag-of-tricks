import {expect, test} from 'vitest';
import {isIp} from '../src/index.js';

test('isIp', () => {
	expect(isIp('8.8.8.8')).toBe(true);
	expect(isIp('127.0.0.1')).toBe(true);
	expect(isIp('127.0.0.')).toBe(false);
});
