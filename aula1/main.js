import {app, BrowserWindow} from 'electron'

//instanciando objeto = função anônima
const criarJanela = () => {
    const janela = new BrowserWindow({
    width: 400,
    height: 800,
    title: "Exemplo - Desktop",
    webPreferences:{
        nodeIntegration: false,
        devTools: true,
        preload: "preload.js"
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