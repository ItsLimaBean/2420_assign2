// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

const PORT = process.env.PORT || 3000;
const ID = process.env.SERVER_ID || "none";

// Declare a route
fastify.get('/', async (request, reply) => {
  return "hello from " + ID;
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: PORT })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
