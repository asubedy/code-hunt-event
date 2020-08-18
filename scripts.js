function check(){
    const userInput = document.getElementById("passwordInput").value;
    let pw = String.fromCharCode(97, 77, 97, 90, 105, 110, 71); // What might this be? Well a search can come handy I guess.
    if(userInput==pw){
        console.log('True answer');
        document.location.href = userInput+".htm";
    }
    else{
        console.log("false");
        const container = document.getElementById("input");
        const tryAgainPara = document.getElementById('warning');
        tryAgainPara.innerText = "Try Again!";
        tryAgainPara.style.color = "rgb(243, 34, 34)";
        container.appendChild(tryAgainPara);
    }    
}