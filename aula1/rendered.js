console.log(`${process.platform}`) //mostra o sistema operacional
console.log(`Electron - ${window.api.versaoElectron}`) //mostra a versão do electron
console.log(`Node - ${process.version.node}`) //versão do node

document.getElementById('texto').innerText = 
`So - ${process.platform} - ELECTRON - ${process.version.electron} - NODE - ${process.versions.node}`

console.log(`${window.api.versaoElectron()}`) //versão do electron
console.log(`${window.api.versaonode()}`) //versão node
console.log(`${window.api.nome}`) // mostra aplicação