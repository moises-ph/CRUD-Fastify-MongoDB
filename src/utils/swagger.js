exports.options = {
    routePrefix : "/documentacion",
    exposeRoute : true,
    swagger : {
        info : {
            title : "Fastify MondoDB rAPI",
            description : "Building my first Rest API with Fastify and MongoDB",
            version : "0.0.1"
        },
        externalDocs:{
            url : "https://swagger.io",
            description : "Find mor info here"
        }
    },
    host : "localhost:3000",
    schemas : ["http"],
    consumes : ["application/json"],
    produces : ["application/json"]
}