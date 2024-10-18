import { assertEquals } from "jsr:@std/assert";
import { Hono, type Context } from 'hono';

const app = new Hono();

app.get('/', (c: Context) => {
    return c.text('Hello Hono!');
});

Deno.test("GET / should return 'Hello Hono!'", async () => {
    const request = new Request("http://localhost/");
    const response = await app.fetch(request);
    const text = await response.text();

    assertEquals(response.status, 200);
    assertEquals(text, 'Hello Hono!');
});