# 笔记

- express：是一个基于 Node.js 平台的 web 应用开发框架，它提供了一系列强大的特性帮助你创建各种 Web 应用。
- 中间件本质上是一个回调函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和web应用中处理请求。
- 全局中间件：请求一旦到达服务器，就会执行全局中间件。路由中间件：请求到达服务器，满足某一路由规则，再执行路由中间件。
- 如火车检票进站，全局中间件相当于安检口，路由中间件相当于进站口闸门，购买的车票规定在哪个进站口上车。
- 09：body-parser: 是一个HTTP请求体解析中间件，使用这个模块可以解析JSON、queryString的请求体，Express框架中就是使用这个模块来解析请求体的。
- 10：防盗链：防止别人盗用你的图片，可以通过设置请求头的referer属性，判断请求来源是否是自己的网站，如果不是，就不返回图片。
- 模板引擎：一个用来将用户界面（html）和业务数据（js）的技术。
- express-generator: 是一个快速生成 Express 应用的工具，可以通过命令行快速生成一个 Express 应用的骨架。
- form表单上传：需要设置enctype属性为multipart/form-data，然后通过req.files获取上传的文件。
- formidable: 是一个nodejs模块，用于解析表单数据，特别是文件上传。
