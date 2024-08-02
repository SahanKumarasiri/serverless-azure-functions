const handlers = require("./src/handlers");

const hello = async (context, req) => await handlers.sayHello(context, req);
const goodbye = async (context, req) => await handlers.sayGoodbye(context, req);

module.exports = { hello, goodbye };
