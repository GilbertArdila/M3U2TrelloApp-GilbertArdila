import { service } from "./gettiingData.js";
import BASE_FAKE_API from "./personal.js";
import createTaskContainer from "./createTaskContainer.js";

function newTask(){
   //showing/hidding  form
   newTask_button.onclick=(e)=>{
    e.preventDefault();
    taskBoard_form.classList.toggle("hidden");
 }

 //sending form info
 create.onclick=(e)=>{
    e.preventDefault();
    //getting the form values
    const tituloTask=`Titulo: ${titulo.value}`;
    const responsableTask=`Responsable: ${responsable.value}`;
    const plazoTask=`Plazo de entrega: ${plazo.value}`;
    const id=Math.floor(Math.random()*100)
//creating data object
    const data={
      title:tituloTask,
      User:responsableTask,
      Date:plazoTask,
      board:'to-do',
      id:id
   }
    //it title is not empty
     if(titulo.value!="" ){
         //calling createTaskContainer
         createTaskContainer({
            tituloTask: tituloTask,
            responsableTask: responsableTask,
            plazoTask: plazoTask,
            id:id

        })
         // const div = document.createElement("div");
         // div.classList.add("task-div")

         // const close=document.createElement("span");
         // close.classList.add("task-div__close");
         // close.innerText="X";

         // const h3 = document.createElement("h3");
         // h3.innerText = tituloTask;

         // const p = document.createElement("p");
         // p.innerText = responsableTask;

         // const p2 = document.createElement("p");
         // p2.innerText = plazoTask;

         // div.append(close,h3,p,p2);
        
         //taskBoard_toDo.appendChild(div);
         taskBoard_form.reset();
         taskBoard_form.classList.add("hidden");
         
         
        
           
         //calling creatingNewData
         service. creatingNewData(BASE_FAKE_API,data)

        

     }
    else{
        alert("El valor de titulo no puede estar vacio");
    }

   
   
 }
 //cancel new task creation
 cancel.onclick=(e)=>{
    e.preventDefault();
    taskBoard_form.reset();
    taskBoard_form.classList.add("hidden");

 }
}

export default newTask