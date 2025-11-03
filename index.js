//DECLARANDO AS VARIÁVEIS 
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

//CRIAR FUNÇÃO P/PEGAR A HORA CORRENTE
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    //PARA TER DOIS NUMERAIS NO VISOR
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    //CAPTURA A HORA E COLOCAR NO innerText
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    //FUNÇÃO P/ATUALIZAR HORA A CADA SEGUNDO AUTOMATICAMENTE
    setTimeout(() => {
        updateClock();
    }, 1000);
}
//CHAMAR A FUNÇÃO updateClock()
updateClock();//MOSTRA NO VISOR HORA ATUAL