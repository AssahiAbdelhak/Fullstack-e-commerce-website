import Fastify from 'fastify'
import { fastifyPostgres } from '@fastify/postgres';
import { serveAllProducts } from './routes/route.js';
import { fastifyStatic } from '@fastify/static';
import { fileURLToPath } from 'url';
import path from 'path';

export const app = Fastify();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.register(fastifyPostgres,{
    connectionString: 'postgres://postgres:admin@localhost/postgres'
})

app.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
  })

app.get('/products',serveAllProducts)

app.listen({port: 8080})