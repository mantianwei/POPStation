const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const router = require('koa-router')();

const path = require('path');
const serve = require('koa-static');

const app = new Koa();
//加载静态资源
const main = serve(path.join(__dirname)+'/effects/');
//URL路由
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

//解析
app.use(bodyParser());

//加载controller middleware:
const controller = require('./controller');
app.use(main);
// 使用middleware:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');