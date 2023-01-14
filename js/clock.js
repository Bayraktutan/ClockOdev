let intro = document.querySelector("#myName")
myName.innerHTML =prompt("İsmini gir")


let days = ["Pazartesi", "Salı", "Çarşamba","Perşembe", "Cuma", "Cumartesi", "Pazar"]


function showTime () {
    let saat = document.querySelector("#myClock")
    let date = new Date();
    let h = date.getHours()
    let m = date.getMinutes();
    let s = date.getSeconds();
    let d = date.getDay();
    
    if (h<10){
        h = "0"+ h
    }
    if (m<10){
        m = "0"+ m
    }
    if (s<10){
        s = "0"+ s
    }    
    let time = h + ":" + m + ":" + s + " " + days[d]
    myClock.innerHTML = time;
    setTimeout(showTime, 1000)
}
showTime()