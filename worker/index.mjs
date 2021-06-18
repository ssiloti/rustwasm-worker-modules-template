// Worker

import wasm_init, * as wasm from "wasm/rustwasm.js"
import wasm_module from "wasm/rustwasm_bg.wasm"

export default {
  async fetch(request, env) {
    return await handleRequest(request, env);
  }
}

async function handleRequest(request, env) {
  await wasm_init(wasm_module);
  const greeting = wasm.greet();
  return new Response(greeting, {status: 200})
}
