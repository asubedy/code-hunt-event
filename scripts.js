function check(){
    const userInput = document.getElementById("passwordInput").value;
    let pw = String.fromCharCode(97, 77, 97, 90, 105, 110, 71); // What might this be? I better search this.
   // console.log(pw);
    if(userInput==pw){
        document.location.href = userInput+".htm";
    }
    else{
        console.log("false");
    }    
}