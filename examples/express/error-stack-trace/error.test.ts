import {
	describe, expect, test,
} from 'vitest';
import express from 'express';
import request from 'supertest';

describe('express error', () => {
	test('express throws error', async () => {
		const app = express();

		app.get('/', (_request, _response) => {
			throw new Error('foo', {
				cause: new Error('bar'),
			});
		});

		const response = await request(app).get('/');

		const expectedError = `Error: foo
  at <root>/examples/express/error-stack-trace/error.test.ts:12:10
  at Layer.handle [as handle_request] (<root>/node_modules/.pnpm/express@4.19.2/node_modules/express/lib/router/layer.js:95:5)
  at next (<root>/node_modules/.pnpm/express@4.19.2/node_modules/express/lib/router/route.js:149:13)
  at Route.dispatch (<root>/node_modules/.pnpm/express@4.19.2/node_modules/express/lib/router/route.js:119:3)
  at Layer.handle [as handle_request] (<root>/node_modules/.pnpm/express@4.19.2/node_modules/express/lib/router/layer.js:95:5)
  at <root>/node_modules/.pnpm/express@4.19.2/node_modules/express/lib/router/index.js:284:15
  at Function.process_params (<root>/node_modules/.pnpm/express@4.19.2/node_modules/express/lib/router/index.js:346:12)
  at next (<root>/node_modules/.pnpm/express@4.19.2/node_modules/express/lib/router/index.js:280:10)
  at expressInit (<root>/node_modules/.pnpm/express@4.19.2/node_modules/express/lib/middleware/init.js:40:5)
  at Layer.handle [as handle_request] (<root>/node_modules/.pnpm/express@4.19.2/node_modules/express/lib/router/layer.js:95:5)`;

		// Regular expression to match the root part of any UNIX-style file path
		// The pathRegex is meant to find/replace the `/Users/coltonehrman/Desktop/Dev Work/` parts of the expectedError
		// The pathRegex is also intended to work when ran on other computers and from different root paths.
		// Warning: this may or may not work for your local environment
		const pathRegex = /\/Users(?:\/[^/]+){4}/g;

		// Transform the error text into a formatted error response that comes from express - express add HTML entities and characters to make it HTML readable
		const expectedErrorTransformed = expectedError
			.replaceAll('\n', '<br>');

		const actualResponseTextTransformed = response.text
			.replaceAll(pathRegex, '<root>')
			.replaceAll('&nbsp;', '');

		expect(actualResponseTextTransformed).toMatch(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>${expectedErrorTransformed}</pre>
</body>
</html>
`);
	});
});
