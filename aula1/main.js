import {app, BrowserWindow} from 'electron'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
//console.log(__filename)
const __dirname = path.dirname(__filename) // somente diretório

//instanciando objeto = função anônima
const criarJanela = () => {
    const janela = new BrowserWindow({
    width: 400,
    height: 800,
    title: "Exemplo - Desktop",
    webPreferences:{
        nodeIntegration: false,
        contextIsolation: true,
        devTools: true,
        preload: path.join(__dirname,"./preload.js"),
        sandbox: false
    }
})
janela.loadFile("index.html")
janela.webContents.openDevTools()
janela.removeMenu()
}
app.whenReady().then(() => {
    criarJanela()
        console.log('Executando Electron!')
    })
    .catch((erro) => {
        console.log(erro)
    })