//code for tabs
var container=document.querySelector(".newsContainer");

//buttons
var btnBus=document.querySelector("#btnBus");
var btnDev=document.querySelector("#btnDev");
var btnEnt=document.querySelector("#btnEnt");

//news types
var business=document.querySelector("#newsBoxBus");
var entertainment=document.querySelector("#newsBoxEnt");
var devices=document.querySelector("#newsBoxDev");

//default page
business.style.display="none";
entertainment.style.display="grid";
devices.style.display="none";

    
//after selecting
btnBus.addEventListener("click",()=>{
    business.style.display="grid";
    entertainment.style.display="none";
    devices.style.display="none";
    btnDev.classList.remove("active");
    btnEnt.classList.remove("active");
    btnBus.classList.add("active");
})
btnDev.addEventListener("click",()=>{
    business.style.display="none";
    entertainment.style.display="none";
    devices.style.display="grid";
    btnDev.classList.add("active");
    btnEnt.classList.remove("active");
    btnBus.classList.remove("active");
})
btnEnt.addEventListener("click",()=>{
    business.style.display="none";
    entertainment.style.display="grid";
    devices.style.display="none";
    btnDev.classList.remove("active");
    btnEnt.classList.add("active");
    btnBus.classList.remove("active");
})
 

//code for load more

//Entertainment Tab

var allNewsEnt=document.getElementsByClassName("en");
var loadButtonEnt=document.getElementById("loadMoreEnt");

var iInEn = 3;
var enSetLenght = 3;

for(var i = 3; i<allNewsEnt.length; i++){
    allNewsEnt[i].style.display = "none";
}

function loadEn(){
    console.log(iInEn);
    var i = 3;
    for(i = iInEn; i< Math.min(iInEn +enSetLenght, allNewsEnt.length); i++ ){
        console.log("pppp");
        allNewsEnt[i].style.display = "grid";
    }
    iInEn = i;
    if(i == allNewsEnt.length){
        loadButtonEnt.style.display="none";
    }
}

//Business Tab

var allNewsBus=document.getElementsByClassName("bus");
var loadButtonBus=document.getElementById("loadMoreBus");

var iInBus = 3;
var busSetLenght = 3;

for(var i = 3; i<allNewsBus.length; i++){
    allNewsBus[i].style.display = "none";
}

function loadBus(){
    console.log(iInBus);
    var i = 3;
    for(i = iInBus; i< Math.min(iInBus +busSetLenght, allNewsBus.length); i++ ){
        allNewsBus[i].style.display = "grid";
    }
    iInBus = i;
    if(i == allNewsBus.length){
        loadButtonBus.style.display="none";
    }
}

//Devices Tab

var allNewsDev=document.getElementsByClassName("dev");
var loadButtonDev=document.getElementById("loadMoreDev");

var iInDev = 3;
var devSetLenght = 3;

for(var i = 3; i<allNewsDev.length; i++){
    allNewsDev[i].style.display = "none";
}

function loadDev(){
    console.log(iInDev);
    var i = 3;
    for(i = iInDev; i< Math.min(iInDev +devSetLenght, allNewsDev.length); i++ ){
        allNewsDev[i].style.display = "grid";
    }
    iInDev = i;
    if(i == allNewsDev.length){
        loadButtonDev.style.display="none";
    }
}