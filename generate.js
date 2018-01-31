const { moveSync } = require('fs-extra')

for (let index = 1; index <= 10; index += 1) {
  moveSync(`run${index}.js`, `./solution/run${index}.js`)
}
