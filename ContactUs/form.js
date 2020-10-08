
const button = document.getElementById('submit');

function getInputValue(){
    // Selecting the input element and get its value 
    const name = document.getElementById("inputName").value;
    const mail = document.getElementById("inputEmail").value;
    const message = document.getElementById("message").value;

    if(name != "" && mail != "" && message != ""){
        alert("Votre Message a bien été envoyé");
        error.style.display = "none";
        }
         else{
      error.style.display = "block";
       }
    console.log(name + " "+ mail + " " + message);
    
}

button.addEventListener('click', getInputValue);


