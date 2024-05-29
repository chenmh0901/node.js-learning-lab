# 笔记

- 约束浏览器和服务器的通信。
- 回环IP 127.0.0.1-127.255.255.255 指向本机。
- 端口：实现不同主机之间的应用程序的通信 http:80 https:443 资源监视器查看端口占用 PID。
- response.setHeader('Content-Type', 'text/html;charset=utf-8');返回内容允许中文。
- response.end()只允许有一个。
- /url:绝对路径 完整、/url（与协议、IP、端口拼接） ./url:相对路径。与当前页面路径进行计算。
- MIME：文件类型。response.setHeader('Content-Type', 'text/html;charset=utf-8'); text/html text/css text/javascript image/jpeg image/png image/gif image/svg+xml application/json application/xml；
- html meta=utf-8 设置网页字符集包含汉字。
