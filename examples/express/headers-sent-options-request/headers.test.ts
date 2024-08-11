import {
	describe, test,
} from 'vitest';
import express from 'express';
import request from 'supertest';

describe('express headers', () => {
	test('express can set headers in Options Response', async () => {
		const app = express();

		app.options('/', (_request, response) => {
			response
				.status(200)
				.setHeader('Access-Control-Allow-Methods', '/')
				.json({
					schema: {},
				});
		});

		await request(app).options('/')
			.expect('Access-Control-Allow-Methods', '/')
			.expect(200, {schema: {}});
	});
});
