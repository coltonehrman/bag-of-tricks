import {test} from 'vitest';
import express from 'express';
import request from 'supertest';

test('express sets Cache-Control headers in Response', async () => {
	const app = express();

	app.get('/healthcheck', (_request, response) => {
		response.set('Cache-Control', 'max-age=300, must-revalidate');

		response.json({
			health: 'OK',
		});
	});

	await request(app).get('/healthcheck')
		.expect('Cache-Control', 'max-age=300, must-revalidate');
});
