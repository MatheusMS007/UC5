import {app, BrowserWindow} from 'electron'

//instanciando objeto = função anônima
const criarJanela = () => {
    const janela = new BrowserWindow({
    width: 400,
    height: 800,
    title: "Exemplo - Desktop"
})
janela.loadFile("index.html")
}


app.whenReady().then(() => {
    criarJanela()
        console.log('Executando Electron!')
    })
    .catch((erro) => {
        console.log(erro)
    })