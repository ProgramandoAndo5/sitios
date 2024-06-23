const taskContainer = document.querySelector(".card-ul");
const addBtn = document.querySelector(".container-form");
/* FORM DATA */
const direction = document.querySelector("#input-dir");
const day = document.querySelector("#select-day");
const time = document.querySelector("#select-time");
const electrodom = document.querySelector("#select-electro");
const obs = document.querySelector("#observations");


let cardsContainer = [
];

const render = () => {
    taskContainer.innerHTML = cardsContainer.map( (task) => {
        return `
            <div class= "card-container">
            <ul class= "clientDatos">
                <li>${task.Direccion}</li>
                <li>${task.Dia}</li>
                <li>${task.Horario}</li>
            </ul>
            <ul class= "clientElectro">
            <li>${task.Electrodomestico}</li>
            </ul>
            <div class= "obsContainer">
            ${task.Observaciones}  
            <i class="fa-regular fa-trash-can delete-btn" data-id= "${task.id}"></i>         
            </div>
            `
        }).join("")
    };
    

    function clickAddTask(e) {
    e.preventDefault();

    if (direction.value == "") {alert("Direccion Obligatorio"); return false;}
    if (day.value == "") {alert("Dia Obligatorio"); return false;}
    if (time.value == "") { alert("Horario Obligatorio"); return false;}
    if (electrodom.value == "") {  alert("Electrodomestico Obligatorio"); return false;}
    if (obs.vlue == "") {  alert("Observaciones Obligatorio"); return false;}

        cardsContainer = [
            ...cardsContainer, {
                Direccion: direction.value,
                Dia: day.value,
                Horario: time.value,
                Electrodomestico: electrodom.value,
                Observaciones: obs.value,
                id: Date.now()
            }
        ]
 
    render();
    addBtn.reset();
    console.dir(cardsContainer);
}
    
    const init = () => {
        document.addEventListener("DOMContentLoaded", render);
        addBtn.addEventListener( "submit", clickAddTask)
    };
    
    init()