import { serve } from 'https://deno.land/std/http/server.ts';
const server = serve({ port: 8000 });
let requestsResponded = 0;

console.log('Listening on http://localhost:8000/');

for await (const req of server) {
	req.respond({ body: JSON.stringify({ message: 'Hello World', count: ++requestsResponded }) });
}
