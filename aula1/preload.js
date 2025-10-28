import { contextBridge} from 'electron'

contextBridge.executeInMainWorld('api', {
    nome: 'Aplicação Desktop',
    versaoNode: () => {console.log(`NODE - ${process.version.node}`)},
    versaoElectron: () => {console.log(``)}
})