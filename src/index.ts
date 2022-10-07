import "./style/main.less";

//checkout homepage https://github.com/Trim21/gm-fetch for @trim21/gm-fetch
import GM_fetch from "@trim21/gm-fetch";

async function main() {
  console.log("script start");

  // cross domain requests
  console.log(`uuid: ${await fetchExample()}`);
}

async function fetchExample(): Promise<string> {
  const res = await GM_fetch("https://httpbin.org/uuid");
  const data = await res.json();
  return data.uuid;
}

main().catch((e) => {
  console.log(e);
});
