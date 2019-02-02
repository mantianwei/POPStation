//首页的路由
var fs=require('fs');
var fn_index = async (ctx, next) => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./effects/wait.html');
};
var fn_signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === '13051503466' && password === '12345') {
        ctx.response.type = 'html';
        ctx.response.body = fs.createReadStream('./effects/wait.html');
    } else {
        ctx.response.body = "<h1>Login failed!</h1>";
    }
};


module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};