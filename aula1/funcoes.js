 const temp = () => {
      
            const temperatura = document.getElementById('sele-temp').value
            const celcius = (document.getElementById('temp-celc')).value

            if(temperatura === 'k'){
                const kelvin = Number(celcius) + 273.15
                alert(`Temperatura em kelvin: ${kelvin}K`)
            }else if(temperatura === 'f'){
                const fahrenheit = Number((celcius) * 9/5) + 32
                alert(`Temperatura em fahrenheit é: ${fahrenheit}F`)
            }else{
                alert('Opção inválida!')
            }
    }