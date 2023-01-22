const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "imagens/asteroid.png"){
        myImage.setAttribute("src", "imagens/dethstar.png");
    }
    else{
        myImage.setAttribute("src", "imagens/asteroid.png");
    }
};
let myButton = document.querySelector("button");
let myheading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Digite seu nome: ");
    localStorage.setItem("name", myName);
    myheading.textContent = `Asteroides sao legal, ${myName}`;
}

if(!localStorage.getItem("name")){
    setUserName();
} else{
    const storedName = localStorage.getItem("name");
    myheading.textContent = `Asteroides sao legal, ${storedName}`
}

myButton.onclick = ()=>{
    setUserName();
};