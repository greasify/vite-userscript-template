import { scripts } from 'virtual:vite-userscript-plugin'

import './index.scss'

const [script] = scripts
const install = document.querySelector<HTMLAnchorElement>('[data-install]')

if (install && script) {
  install.href = `./${script.file}`
  install.addEventListener('click', (event) => {
    event.preventDefault()
    window.open(`./${script.file}`, '_blank')
  })
}
