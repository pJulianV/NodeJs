import { readFileSync} from "node:fs"

const fs= readFileSync("./archivo1.txt","utf-8")

console.log(fs)