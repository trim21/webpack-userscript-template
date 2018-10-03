import { axios } from './utils'
import '../style/main.css'

axios.get('https://httpbin.org/headers', { headers: { key: 'value' } }).then(
  response => {
    console.log(response.data)
  },
  error => {
    console.log(error)
  }
)
