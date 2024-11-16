



document.addEventListener("DOMContentLoaded",()=>{


    let getForm = document.getElementById("getForm");
    let getFirstName = document.getElementById("getFirstName");
    let getLastName = document.getElementById("getLastName");
    let getEmail = document.getElementById("getEmail");
    let getNumber = document.getElementById("getNumber");
    let getMessage = document.getElementById("getMessage");
    let test = true;

    getForm.addEventListener("submit",(e)=>{
        if(getFirstName.value.trim() == "" && typeof(parseInt(getFirstName.value)) == "number"){
            e.preventDefault();
            getFirstName.parentElement.style.border = "2px solid red";
            test = false;
        }else{
            getFirstName.parentElement.style.border = "none";
            test = true;
        }
         if(getLastName.value.trim() == ""){
            e.preventDefault();
            getLastName.parentElement.style.border = "2px solid red";
            test = false;
        }else{
            getLastName.parentElement.style.border = "none";
            test = true;
        }
         if(getEmail.value.trim() == ""){
            e.preventDefault();
            getEmail.parentElement.style.border = "2px solid red";
            test = false;
        }else{
            getEmail.parentElement.style.border = "none";
            test = true;
        }
         if(getNumber.value.trim() == ""){
            e.preventDefault();
            getNumber.parentElement.style.border = "2px solid red";
            test = false;
        }else{
            getNumber.parentElement.style.border = "none";
            test = true;
        }
         if(getMessage.value.trim() == ""){
            e.preventDefault();
            getMessage.parentElement.style.border = "2px solid red";
            test = false;
        }else{
            getMessage.parentElement.style.border = "none";
            test = true;
        }

        if(test === true){
            alert("Message Has been Send")
        }
    })



    document.getElementById("searchInput").onclick = ()=>{
        location.replace("catalogue.html");
    }

})