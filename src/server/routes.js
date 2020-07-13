const Router = require("koa-router");
const HttpStatus = require("http-status");
const Idea = require("./controllers/idea");
const Member = require("./controllers/member");

const router = new Router();

router.get("/ideas", async (ctx, next) => {
  try {
    const ideas = await Idea.showAll();
    ctx.response.status = HttpStatus.OK;
    ctx.response.body = ideas;
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      error: true,
      message: err.message,
    };
    ctx.app.emit("error", err, ctx);
  }
});

router.get("/members", async (ctx, next) => {
  try {
    const ideas = await Member.showAll();
    ctx.response.status = HttpStatus.CREATED;
    ctx.body = ideas;
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      error: true,
      message: err.message,
    };
    ctx.app.emit("error", err, ctx);
  }
});

router.post("/ideas", async (ctx, next) => {
  try {
    const content = ctx.request.body;
    const idea = await Idea.create(content);
    ctx.status = HttpStatus.CREATED;
    ctx.body = idea.toJSON();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      error: true,
      message: err.message,
    };
    ctx.app.emit("error", err, ctx);
  }
});

router.post("/members", async (ctx, next) => {
  try {
    const content = ctx.request.body;
    const idea = await Member.addNewMember(content.id, content.member);
    ctx.response.status = HttpStatus.CREATED;
    ctx.response.body = idea.toJSON();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      error: true,
      message: err.message,
    };
    ctx.app.emit("error", err, ctx);
  }
});

router.delete("/ideas", async (ctx, next) => {
  try {
    await Idea.deleteAll();
    ctx.status = HttpStatus.OK;
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      error: true,
      message: err.message,
    };
    ctx.app.emit("error", err, ctx);
  }
});

module.exports = router;
