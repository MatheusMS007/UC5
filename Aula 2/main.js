import {app, BrowserWindow, nativeTheme, ipcMain, Menu, dialog, Notification} from 'electron'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

let janela = null 

function criarJanela(){
    nativeTheme.themeSource = 'light' // modo claro/escuro da janela
    janela = new BrowserWindow({ 
        width: 800, height: 800,
        title: "Aplicação Desktop",  
        resizable: true,     
        webPreferences: {
            nodeIntegration: false,           
            contextIsolation: true,
            devTools: true,
            preload: path.join(__dirname,'preload.js'),
            sandbox: false,
            //setZoomFactor: 1.0 //deixando o zoom em 100%
        }
    })
    window.loadFile('index.html') 
    janela.webContents.openDevTools()

}

ipcMain.on("login", (event) => {
    const loginCorreto = "admin"
    const senhaCorreta = "1234"

    event.sender.send("login-resposta", {
        ok: loginCorreto === "admin" && senhaCorreta === "1234"
    })
})

app.whenReady().then(criarJanela)

    janela.loadFile('index.html') 
    janela.webContents.openDevTools()