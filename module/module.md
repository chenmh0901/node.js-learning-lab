# 笔记

- module.exports 可以暴露任意数据字符串、数字、对象。
- exports = module.exports {} exports.name => 对象模版字面量。
- require 引入文件夹。先查找文件夹下的package.json main字段，如果没有则查找index.js。
- require 引入会缓存。
