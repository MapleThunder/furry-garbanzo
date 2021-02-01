const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path: ".env" });
const createServer = require("./createServer");
const db = require("./db");

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

// 2. Create a middleware that populates the user on every request
server.express.use(async (req, res, next) => {
  // If they aren't logged in, skip this
  if (!req.userId) return next();
  const user = await db.user.findOne(
    { where: { id: req.userId } },
    `{id, permissions, email, name}`
  );
  req.user = user;
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
