const Koa = require('koa')
const app = new Koa()

const router = require('./router')

//注册路由
app.use(router.routes(),router.allowedMethods())
// 错误处理
app.on('error',(err,ctx) => {
    console.error('server error',err,ctx)
});

module.exports = app