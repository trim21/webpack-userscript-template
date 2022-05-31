/**
 * checkout homepage https://github.com/Trim21/gm-fetch for @trim21/gm-fetch
 */
import GM_fetch from '@trim21/gm-fetch'
import './style/main.less'
import { add } from './example'

async function main () {
  console.log('script start')
  console.log(`1 + 2 = ${add(1, 2)}`)

  const res = await GM_fetch('https://httpbin.org/uuid')
  const data = await res.json()
  console.log(`uuid: ${data.uuid}`)
}

main().catch((e) => {
  console.log(e)
})
