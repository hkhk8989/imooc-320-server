const router = require('koa-router')()

// 环境参数 根据环境参数连接不同的数据库
const ENV = process.env.NODE_ENV

router.get('/api/test',async (ctx,next) => {
    ctx.body = {
        errno: 0,
        msg: `koa2 test,ENV: ${ENV}`
    }
})

module.exports = router