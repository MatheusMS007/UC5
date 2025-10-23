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

    //quet3

    const temp = () => {
        let continua = 'S'

        while(continua = 'S'){
            const temperatura = prompt('Qual temperatura você quer converter? (K ou F): ').toUpperCase
            const celcius = Number(prompt('Digite a temperatura em celcius: '))

            if(temperatura === 'K'){
                const kelvin = celcius + 273.15
                console.log(`Temperatura em kelvin: ${kelvin}K`)
            }else if(temperatura === 'F'){
                const fahrenheit = (celcius * 9/5) + 32
                console.log(`Temperatura em fahrenheit é: ${fahrenheit}F`)
            }else{
                console.log('Opção inválida!')
            }
            continua = prompt('Deseja converter novamente? ')
        }
        console.log('Finalizado!')
    }