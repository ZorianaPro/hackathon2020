const Router = require("koa-router");
const HttpStatus = require("http-status");
const Idea = require('./controllers/idea');
const Member = require('./controllers/member');

const router = new Router();

router.get("/ideas", async (ctx, next) => {
	try {
		const ideas = await Idea.showAll();
		ctx.response.status = HttpStatus.OK;
		ctx.response.body = ideas;
	} catch (err) {
		ctx.throw(HttpStatus.INTERNAL_SERVER_ERROR, err.message);
	}
});

router.get("/members", async (ctx, next) => {
	try {
		const ideas = await Member.showAll();
		ctx.response.status = HttpStatus.OK;
		ctx.body = ideas;
	} catch (err) {
		ctx.throw(HttpStatus.INTERNAL_SERVER_ERROR, JSON.stringify({message: err.message}));
	}
});

router.post("/addNewidea", async (ctx, next) => {
	try {
		const content = ctx.request.body;
		const idea = await Idea.create(content);
		ctx.status = HttpStatus.OK;
		ctx.body = idea.toJSON();
	} catch (err) {
		ctx.throw(HttpStatus.INTERNAL_SERVER_ERROR, err.message);
	}
});

router.post('/join', async (ctx, next) => {
	try {
		const content = ctx.request.body;
		const idea = await Member.addNewMember(content.id, content.member);
		ctx.response.status = HttpStatus.OK;
		ctx.response.body = idea.toJSON();
	} catch (err) {
		ctx.throw(HttpStatus.INTERNAL_SERVER_ERROR, JSON.stringify({message: err.message}));
	}
});

router.get('/ideas/delete', async (ctx, next) => {
	try {
		await Idea.deleteAll();
		ctx.status = HttpStatus.OK;
	} catch (err) {
		ctx.throw(HttpStatus.INTERNAL_SERVER_ERROR, JSON.stringify({message: err.message}));
	}
});

module.exports = router;