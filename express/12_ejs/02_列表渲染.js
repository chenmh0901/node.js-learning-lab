const ejs = require('ejs')

const xiyou = ['唐僧', '孙悟空', '猪八戒', '沙和尚']

// const template = '<ul>'

// xiyou.forEach(item => {
//   template += `<li>${item}</li>`
// })

// template += '</ul>'

const template = ejs.render(`
<ul>
  <% xiyou.forEach(item => { %>
  <li><%= item %></li>
  <% }) %>
</ul>
`, { xiyou })

console.log(template);
