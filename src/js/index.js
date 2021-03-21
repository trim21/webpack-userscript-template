import { axios } from './utils'
import '../style/main.less'
import { add } from './example'

console.log('script start')
console.log(add(1, 2))
axios.get('https://httpbin.org/headers', { headers: { key: 'value' } }).then(
  response => {
    console.log(response.data)
    for (const number of [1, 2, 3]) {
      console.log(number)
    }
  },
  error => {
    console.log(error)
  }
)
