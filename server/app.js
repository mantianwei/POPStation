const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const router = require('koa-router')();

const path = require('path');
const serve = require('koa-static');

const app = new Koa();

const main = serve(path.join(__dirname)+'/effects/');
// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());


// 导入controller middleware:
const controller = require('./controller');
app.use(main);
// 使用middleware:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');