const Router = require("koa-router");
const HttpStatus = require("http-status");
const Idea = require('./controllers/idea');

const router = new Router();

router.get("/ideas", async (ctx, next) => {
	const ideas = await Idea.showAll();
	ctx.status = HttpStatus.OK;
	ctx.body = ideas;
	await next();
});

router.post("/idea", async (ctx, next) => {
	const content = ctx.request.body;
	const idea = await Idea.create(content);

	ctx.status = HttpStatus.OK;
	ctx.body = idea.toJSON();
	await next();
});

router.post('/join', async (ctx, next) => {
	const content = ctx.request.body;
	const idea = await Idea.addTeamMember(content.id, content.member);
	ctx.status = HttpStatus.OK;
	ctx.body = idea.toJSON();
	await next();
});

router.get('/ideas/delete', async (ctx, next) => {
	const idea = await Idea.deleteAll();
	ctx.status = HttpStatus.OK;
	await next();
});

module.exports = router;