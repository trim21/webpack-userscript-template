import { get } from './utils'
import '../style/main.less'
import { add } from './example'

async function main () {
  console.log('script start')
  console.log(add(1, 2))
  const res = await get<{ uuid: string }>('https://httpbin.org/uuid')
  console.log(`uuid: ${res.data.uuid}`)
}

main().catch(e => {
  console.log(e)
})
