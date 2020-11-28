const inp = document.getElementById('input')

 
    document.addEventListener('DOMContentLoaded', function() {

        showText("#msg  ", "Welcome to the sixth round of HackIT a Techquest Event.\n\nHope you had fun in the previous round, and we hope so you continue to move forward to reach the final page and successfuly complete the code hunt.\n\nIn this round you need to crack the password to advance in the next round.\n", 0, 30);
    });

    let showText = function (target, message, index, interval) {
        if (index < message.length) {
         document.querySelector(target).innerText =document.querySelector(target).innerText + message[index++];
         setTimeout(function () { showText(target, message, index, interval); }, interval);
        }
    }
    function check(){
    const userInput = document.getElementById("passwordInput").value;
    let pw = String.fromCharCode(97, 77, 97, 90, 105, 110, 71); // What might this be? Well a search can come handy I guess.
    if(userInput==pw){
        console.log('True answer');
        document.location.href = userInput+".htm";
    }
    else{
        console.log("false");
        const tryAgainPara = document.getElementById('warning');
        tryAgainPara.innerText = "Try Again!";
        tryAgainPara.style.color = "rgb(243, 34, 34)";
        inp.appendChild(tryAgainPara);
    }    
}
    
    
    inp.style.display = "none";            
    setTimeout(() => {
        inp.style.display = "block";
        inp.animate([{opacity:0},{opacity:1}],1000)

    }, 9000);

    const anotherWaiting = document.getElementById("hint");
    anotherWaiting.style.display= "none";
     setTimeout(() => {
         anotherWaiting.style.display = "block";
         anotherWaiting.animate([{opacity:0},{opacity:1}],2000)
     }, 9600);  

    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            showBelowText("#lastText ","All the best. It's adviced you try this in a PC but if you know your way out you can crack the password in mobile also." , 0, 30);
        }, 10200);
   
    });

    let showBelowText = function (target, message, index, interval) {
         if (index < message.length) {
            document.querySelector(target).innerText =document.querySelector(target).innerText + message[index++];
            setTimeout(function () { showText(target, message, index, interval); }, interval);
        }
    }