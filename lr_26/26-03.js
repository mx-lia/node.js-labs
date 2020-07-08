const express = require("express");
const fs = require("fs");
const app = express();

let wasmCode = fs.readFileSync("public/p.wasm");
console.log(wasmCode);
let wasmImports = {};
let wasmModule = new WebAssembly.Module(wasmCode);
let wasmInstance = new WebAssembly.Instance(wasmModule, wasmImports);

app.get("/", (req, res, next) => {
    res.type("html").send(
        `<h1>WASM</h1>` + 
        `<p>sum(5, 10) = ${wasmInstance.exports.sum(5, 10)}</p>` +
        `<p>mul(5, 4) = ${wasmInstance.exports.sum(5, 4)}</p>` +
        `<p>sub(9, 7) = ${wasmInstance.exports.sub(9, 7)}</p>`
    )
})

app.listen(3000, () => console.log("Start server, port: ", 3000));
