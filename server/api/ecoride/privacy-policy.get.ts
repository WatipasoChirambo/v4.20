import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export default defineEventHandler(async (event) => {
  setHeader(event, 'content-type', 'text/markdown; charset=utf-8')

  const filePath = join(process.cwd(), 'public', 'docs', 'ecoride', 'privacy-policy.md')
  return await readFile(filePath, 'utf8')
})
