import {
	vi, expect, test, describe,
	beforeAll,
	afterAll,
} from 'vitest';
import {isIp} from '../src/index.js';
import * as impl from '../src/is-ip.impl.js';

describe('isIp() throws error', () => {
	const spy = vi.spyOn(impl, '_isIp');

	beforeAll(() => {
		spy.mockImplementation(() => {
			throw new Error('Error');
		});
	});

	afterAll(() => {
		spy.mockRestore();
	});

	test.todo('should log out warning message to console', () => {}); // eslint-disable-line @typescript-eslint/no-empty-function

	test('should throw error', () => {
		expect(() => isIp()).toThrow();
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
