import {expect, test} from 'vitest';
import {isIp} from '../src/index.js';

test('isIp', () => {
	expect(isIp('8.8.8.8')).toBe(true);
	expect(isIp('127.0.0.1')).toBe(true);
	expect(isIp('127.0.0.')).toBe(false);

	expect(isIp('0.0.0.0')).toBe(true);
	expect(isIp('255.255.255.255')).toBe(true);

	expect(isIp('-1.-1.-1.-1')).toBe(false);
	expect(isIp('0.0.0.0-1')).toBe(false);
	expect(isIp('0.0.-1.0')).toBe(false);
	expect(isIp('0.-1.0.0')).toBe(false);
	expect(isIp('-1.0.0.0')).toBe(false);

	expect(isIp('256.256.256.256')).toBe(false);
	expect(isIp('0.0.0.256')).toBe(false);
	expect(isIp('0.0.256.0')).toBe(false);
	expect(isIp('0.256.0.0')).toBe(false);
	expect(isIp('256.0.0.0')).toBe(false);
});
