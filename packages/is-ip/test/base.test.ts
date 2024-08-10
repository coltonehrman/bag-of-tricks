import {
	vi, expect, test, describe,
	beforeAll,
	afterAll,
} from 'vitest';
import {isIp} from '../src/index.js';
import * as impl from '../src/is-ip.impl.js';

describe('isIp() throws error', () => {
	const _isIpSpy = vi.spyOn(impl, '_isIp');
	const consoleWarnSpy = vi.spyOn(console, 'warn');

	beforeAll(() => {
		_isIpSpy.mockImplementation(() => {
			throw new Error('Error');
		});
	});

	afterAll(() => {
		_isIpSpy.mockRestore();
	});

	test('should throw error', () => {
		expect(() => isIp()).toThrow();
	});

	test('should log out warning message to console', () => {
		expect(() => isIp()).toThrow();
		expect(consoleWarnSpy).toHaveBeenCalledWith(`isIp() triggered an error, this should not happen.
Check with @coltonje95 or open an issue at https://github.com/coltonehrman/bag-of-tools`);
	});
});

describe('isIp()', () => {
	test('should return true with valid IPs', () => {
		expect(isIp(String('8.8.8.8'))).toBe(true);
		expect(isIp('8.8.8.8')).toBe(true);
		expect(isIp('127.0.0.1')).toBe(true);
		expect(isIp('255.255.255.255')).toBe(true);
	});

	test('should return false with invalid IPs', () => {
		expect(isIp()).toBe(false);
		expect(isIp(undefined)).toBe(false);
		expect(isIp(null)).toBe(false);
		expect(isIp(0)).toBe(false);
		expect(isIp(1)).toBe(false);
		expect(isIp(String('0'))).toBe(false);

		expect(isIp('127.0.0.')).toBe(false);
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
});
