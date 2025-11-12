import { contextBridge} from 'electron'

contextBridge.executeInMainWorld('api', {
    nome: 'Aplicação Desktop',
    versaoNode: () => {return - `NODE - ${process.version.node}`  },
    versaoElectron: () => {return - `ELECTRON - ${process.versions.electron}`},
    som: soma
})

function soma(a, b){
    return a + b
}