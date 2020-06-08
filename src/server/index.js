const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Logger = require("koa-logger");
const cors = require("koa-cors");
const Router = require("koa-router");
const HttpStatus = require("http-status");

const app = new Koa();

const PORT = process.env.PORT || 8082;

app.use(BodyParser());
app.use(Logger());

app.use(cors());

const router = new Router();

router.get("/book", async (ctx, next) => {
  const books = [
    "Learn somehting man",
    "Fluent Python",
    "Pro Python",
    "The Go programming language",
  ];

  ctx.status = HttpStatus.OK;
  ctx.body = books;
  await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/",
    PORT,
    PORT
  );
});
