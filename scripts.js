function check(){
    const userInput = document.getElementById("passwordInput").value;
    let pw = String.fromCharCode(97, 77, 97, 90, 105, 110, 71); // What might this be? I better search this.
    if(userInput==pw){
        document.location.href = userInput+".htm";
    }
    else{
        console.log("false");
        const container = document.getElementById("input");
        const tryAgainPara = document.createElement('p');
        tryAgainPara.innerText = "Try Again!";
        tryAgainPara.style.color = "rgb(243, 34, 34)";
        container.appendChild(tryAgainPara);
        setTimeout(() => {
            container.removeChild(tryAgainPara);
        }, 4000);
    }    
}