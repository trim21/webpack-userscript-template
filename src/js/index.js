import { axios } from './utils'
import '../style/main.less'

console.log('script start')

axios.get('https://httpbin.org/headers', { headers: { key: 'value' } }).then(
  response => {
    console.log(response.data)
  },
  error => {
    console.log(error)
  }
)
