function say() {
  console.log('你好...')
}

function call() {
  console.log('📱')
}

// module.exports = {
//   say,
//   call
// }

exports.say = say;
exports.call = call;
