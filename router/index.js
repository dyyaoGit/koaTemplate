const Router = require('koa-router')
const router = new Router()

router.use((ctx,next) => {
    next()
    console.log(ctx.url + ' ' + ctx.method + ' ' + ctx.response.status)
})

router.get('/', ctx => {
    ctx.body = '路由界面'
})

router.post('/', ctx => {
    console.log(ctx.request.body)
    ctx.body = ctx.request.body
})



module.exports = router;