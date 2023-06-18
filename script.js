let listaIngredientes = [];

const ingredientes = document.querySelectorAll(".check");

$(document).ready(function() {
    $(".check").click(function() {
        listaIngredientes = [];

        ingredientes.forEach((item) => {
            if(item.checked){
                listaIngredientes.push(item.id);
                
            }
        })
        console.log(listaIngredientes);

        document.querySelector(".ingredientes").innerHTML = listaIngredientes.toString();

        document.querySelector(".ingredientesExtras").innerHTML = listaIngredientes.slice(3).toString();

        document.querySelector("#valorExtras").innerHTML = listaIngredientes.slice(3).length*800;
    })
})

function calculoPropina(value=1000){
    document.querySelector(".propina").innerHTML = value;
}

function enviarPropina(){
    const nombreVariable = document.querySelector(".propina").innerHTML;
        if(nombreVariable == 0){
            alert("Aún no ha definido una propina")
        } else {
            alert(`Su propina de ${nombreVariable} ha sido enviada`)
        }
}