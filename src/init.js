import { safeLoad } from 'js-yaml'
import { readFileSync } from 'fs'
import { drawHelp, drawHelpList } from './canvas'
import parseHelp from './parser'
function initializeHelp() {
    const { helper: moduleList } = safeLoad(readFileSync('config/exports.yml'))
    let topicList = []
    for (let i of moduleList) {
        const helperFiles = safeLoad(readFileSync(`node_modules/nodebot-module-${i}/helper.yml`))
        topicList = [...topicList, ...Object.keys(helperFiles)]
        for (let j of Object.keys(helperFiles)) {
            drawHelp(j, parseHelp(readFileSync(`node_modules/nodebot-module-${i}/${helperFiles[j]}`, 'utf-8')))
        }
    }
    drawHelpList(topicList)
}
export default [ initializeHelp ]