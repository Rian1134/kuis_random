const Skor = document.getElementById("skor");
const perfect = document.getElementById("perfect");
const dongo = document.getElementById("dongo");

let skor = 0;

console.log(skor);

if(localStorage.getItem("soal1") == "benar"){
    skor++;
}

if(localStorage.getItem("soal2") == "benar"){
    skor++;
}
if(localStorage.getItem("soal3") == "benar"){
    skor++;
}
if(localStorage.getItem("soal4") == "benar"){
    skor++;
}
if(localStorage.getItem("soal5") == "benar"){
    skor++;
}
if(localStorage.getItem("soal6") == "benar"){
    skor++;
}
if(localStorage.getItem("soal7") == "benar"){
    skor++;
}
if(localStorage.getItem("soal8") == "benar"){
    skor++;
}
if(localStorage.getItem("soal9") == "benar"){
    skor++;
}
if(localStorage.getItem("soal10") == "benar"){
    skor++;
}

Skor.textContent = skor + "/10";

if(skor == 10){
    perfect.style.display = "flex";
}

if(skor == 0){
    dongo.style.display = "flex";
}