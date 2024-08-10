import process from 'node:process';
import {
	afterEach,
	describe, expect, test, vi,
} from 'vitest';
import express from 'express';
import request from 'supertest';

describe('express headers', () => {
	afterEach(() => {
		vi.unstubAllEnvs();
	});

	test('NODE_ENV=test express sets Cache-Control headers in Response', async () => {
		const app = express();

		app.get('/healthcheck', (_request, response) => {
			response.set('Cache-Control', 'max-age=300, must-revalidate');

			response.json({
				health: 'OK',
			});
		});

		expect(process.env.NODE_ENV).toBe('test');

		await request(app).get('/healthcheck')
			.expect('Cache-Control', 'max-age=300, must-revalidate');
	});

	test('NODE_ENV=development express sets Cache-Control headers in Response', async () => {
		vi.stubEnv('NODE_ENV', 'development');

		const app = express();

		app.get('/healthcheck', (_request, response) => {
			response.set('Cache-Control', 'max-age=300, must-revalidate');

			response.json({
				health: 'OK',
			});
		});

		expect(process.env.NODE_ENV).toBe('development');

		await request(app).get('/healthcheck')
			.expect('Cache-Control', 'max-age=300, must-revalidate');
	});

	test('NODE_ENV=production express sets Cache-Control headers in Response', async () => {
		vi.stubEnv('NODE_ENV', 'production');

		const app = express();

		app.get('/healthcheck', (_request, response) => {
			response.set('Cache-Control', 'max-age=300, must-revalidate');

			response.json({
				health: 'OK',
			});
		});

		expect(process.env.NODE_ENV).toBe('production');

		await request(app).get('/healthcheck')
			.expect('Cache-Control', 'max-age=300, must-revalidate');
	});
});
