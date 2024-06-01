const ejs = require('ejs')

const flag = true;

const result = ejs.render(`
<% if(flag){ %>
  <h1>true</h1>
<% }else{ %>
  <h1>false</h1>
<% } %>
`, { flag: flag })

console.log(result);
