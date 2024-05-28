const tds = document.querySelectorAll('td');
tds.forEach(i => {
  i.onclick = function () {
    this.style.backgroundColor = 'red';
  }
})
