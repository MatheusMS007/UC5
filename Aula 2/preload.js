import { contextBridge, ipcRenderer} from 'electron'

contextBridge.exposeInMainWorld("api", {
  fazerLogin: () => ipcRenderer.send("login"),
  receberResultado: (callback) => ipcRenderer.on("login-resposta", (event, data) => callback(data))
});
