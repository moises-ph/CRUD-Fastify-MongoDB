const fastify = require('fastify')({logger: true});
const productRoute = require('./routes/products.routes');

require('./utils/mongoose');

const swagger = require('./utils/swagger'); 
fastify.register(require('@fastify/swagger'), swagger.options);

productRoute.map(route => fastify.route(route));

const start = async () =>{
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
};

start();