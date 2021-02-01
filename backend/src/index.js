const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: ".env" });
const createServer = require("./createServer");

const server = createServer();

server.express.use(cookieParser());
// decode the JWT so we can get the userId on each request
server.express.use((req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // Add the userId to the request so it is available for all pages
    req.userId = userId;
  }
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  (details) => {
    console.log(
      `Server is now running on port http://localhost:${details.port}`
    );
  }
);
