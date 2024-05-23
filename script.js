
 const form = document.getElementById("form");
 const Username = document.getElementById("Username");
 const Superfície = document.getElementById("Superfície");
 const metragem = document.getElementById("metragem");
 const superfícieLinear = document.getElementById("superfícieLinear");
 
form.addEventListener("submit", (event) => {
    event.preventDefault();
   
    checkInputUsername();
    checkInputSuperfície();
    checkInputMetragem();
})


function checkInputUsername(){
    const UsernameValue = Username.value;

    
    if(UsernameValue === ""){
        errorInput(Username, "Preencha o nome do cliente")
    }else{
    const formItem = Username.parentElement;
    formItem.classList = "form-content"
}


}
function checkInputSuperfície(){
    const SuperfícieValue = Superfície.value

    if(SuperfícieValue === ""){
        errorInput(Superfície, "A Superfície é obrigatória.")
    }else{
        const formItem = Superfície.parentElement;
        formItem.className = "form-content"
    }
 
    
}


function checkInputMetragem(){
    const metragemValue = metragem.value;

    if(metragemValue === ""){
        errorInput(metragem, "A metragem é obrigatória.")
    }else if(metragemValue = Number){
        errorInput(metragem, "A metragem precisa ser numérica")  
    
    }
    }
    

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"


}
