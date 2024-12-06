import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function function2(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || await request.text() || 'world second function';

    return { body: `Hello, ${name}!` };
};

app.http('function2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: function2
});
