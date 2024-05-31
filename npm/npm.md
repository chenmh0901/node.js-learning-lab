# 笔记

- 开发依赖：只在开发阶段使用的依赖包。
- 生产以来：在开发阶段和最终上线运行阶段都要使用的依赖包。
- 环境变量：使系统可以在任意位置访问的变量。比如在C盘查找D盘中的可执行文件。先查找本目录下有无，无查找环境变量。
- package-lock：锁定依赖包的版本，防止不同的开发环境安装不同的依赖包版本。
- scripts：在package.json中的scripts字段中可以定义一些命令，比如npm run start，npm run build等。
- 设置镜像源 `npm config set registry https://registry.npm.taobao.org`。
- nrm：npm的镜像源管理工具。nrm use taobao。npm config list。
- yarn：Facebook开发的Javascript包管理工具，比npm更快，更安全。
- nvm：Node版本管理工具，切换Node.js不同版本。Docker：容器化技术。
- npm是Js包管理工具。Ubuntu：apt，CentOS：yum，Mac：Homebrew，Windows：chocolatey。
