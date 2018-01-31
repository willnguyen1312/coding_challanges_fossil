const { outputFileSync } = require('fs-extra')

for (let index = 1; index <= 10; index += 1) {
  outputFileSync(`run${index}.js`)
}
