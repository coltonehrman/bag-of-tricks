import {bench, describe} from 'vitest';
import {faker} from '@faker-js/faker';
import {countChar} from '../src/index.js';

describe('isIp()', () => {
	bench('normal', () => {
		countChar('abc', 'a');
	});

	const oneHundredChars = faker.string.sample(100);

	bench('100 chars', () => {
		countChar(oneHundredChars, 'a');
	});

	const oneThousandChars = faker.string.sample(1000);

	bench('1_000 chars', () => {
		countChar(oneThousandChars, 'a');
	});

	const tenThousandChars = faker.string.sample(10_000);

	bench('10_000 chars', () => {
		countChar(tenThousandChars, 'a');
	});

	const oneHundredThousandChars = faker.string.sample(100_000);

	bench('100_000 chars', () => {
		countChar(oneHundredThousandChars, 'a');
	});
});
