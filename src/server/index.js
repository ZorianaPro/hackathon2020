const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Logger = require("koa-logger");
const cors = require("koa-cors");
const Router = require("koa-router");
const HttpStatus = require("http-status");
const db = require('./db');
const Idea = require('./controllers/idea');

const app = new Koa();

const PORT = process.env.PORT || 8082;

app.use(BodyParser());
app.use(Logger());

app.use(cors());

const router = new Router();

router.get("/idea", async (ctx, next) => {
  const idea = await Idea.showAll()

  ctx.status = HttpStatus.OK;
  ctx.body = idea;
  await next();
});

router.post("/idea", async (ctx, next) => {
  const content = ctx.request.body
  const idea = await Idea.create({content})

  ctx.status = HttpStatus.OK;
  ctx.body = idea.toJSON();
  await next();
});

app.use(router.routes()).use(router.allowedMethods());

db.connect()
.then(() => {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/",
      PORT,
      PORT
    );
  })
})

