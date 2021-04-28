const fastify = require("fastify");
const cors = require("fastify-cors");

const start = async () => {
    const server = fastify.default();
    await server.register(cors, {
        origin: ["http://localhost:3000"]
    });

    server.get("/", (req, res) => {
        res.send("Hello there!");
    });

    const address = await server.listen(8080);
    console.log(`Listening on ${address}`);
}

start();