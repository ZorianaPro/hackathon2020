const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Logger = require("koa-logger");
const cors = require("koa-cors");

const db = require('./db');
const router = require('./routes');

const app = new Koa();
const PORT = process.env.PORT || 8082;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

app.use(router.routes()).use(router.allowedMethods());
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  await next();
});

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
.catch((err) =>{
  throw err;
});

