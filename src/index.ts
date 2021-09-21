import { get } from './utils'
import './style/main.less'
import { add } from './example'

async function main () {
  console.log('script start')
  console.log(`1 + 2 = ${add(1, 2)}`)
  const res = await get<{ uuid: string }>('/uuid', {
    baseURL: 'https://httpbin.org',
  })
  console.log(`uuid: ${res.data.uuid}`)
}

main().catch((e) => {
  console.log(e)
})
