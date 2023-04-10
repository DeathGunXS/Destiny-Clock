    function relogio() {
        const elementoRelogio = document.querySelector (".relogio");
        const horaAtual = new Date();
        const horas = horaAtual.getHours();
        const minutos = horaAtual.getMinutes();
        const segundos = horaAtual.getSeconds();
        //const formatoHoras = horas.toString().padStart(2,"0");
        const formatoHoras = 10
        const formatoMinutos = minutos.toString().padStart(2,"0");
        const formatoSegundos = segundos.toString().padStart(2,"0");

        var img = document.querySelector("#imagem");

        elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`
        
        const frase = document.querySelector(".frase")

        dia = new Array("domindo", "Segunda Feira", "Terça Feira", "Quarta Feira", "Quinta Feira", "Sexta Feira", "Sabado");

        meses = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
    
        hoje = new Date

        frase.innerHTML =`${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2,"0")} de ${meses[hoje.getMonth()]} de ${hoje.getFullYear()}`
           
        if(formatoHoras >= 0 && formatoHoras <12){
            document.body.style.backgroundImage ="url(https://cdnportal.mobalytics.gg/production/2022/06/19c9b606-solar-titan-splash.jpg)"
            img.scr = "des.jpg"
        }

        
        else if(formatoHoras >=12 && formatoHoras <18){
            document.body.style.backgroundImage ="url(https://www.gamepur.com/wp-content/uploads/2022/11/04090206/stasis.jpg)"
            img.scr = "des.jpg"
        }

        else {
            document.body.style.backgroundImage = "url(https://i.redd.it/i-saw-the-new-void-3-0-subclass-backgrounds-and-couldnt-v0-3fp5v79sivi81.png?width=1920&format=png&auto=webp&s=e3890d2e77532772453c389ff8a05446d296853a)"
            img.scr = "des.jpg"
        }

        
    }

    setInterval(relogio, 1000)