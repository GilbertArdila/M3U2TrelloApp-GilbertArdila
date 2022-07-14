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
    const id=Math.floor(Math.random()*100);
    //sending actual date 
  
    let initDate= moment().format('DD/MM/Y')
      
    initDate=`Fecha de inicio ${initDate}`
    console.log(initDate)
    const finishDate="";
 
//creating data object
    const data={
      title:tituloTask,
      User:responsableTask,
      Date:plazoTask,
      board:'to-do',
      initDate,
      finishDate
   }
    //it title is not empty
     if(titulo.value!="" ){
         //calling createTaskContainer
         createTaskContainer({
            tituloTask: tituloTask,
            responsableTask: responsableTask,
            plazoTask: plazoTask,
            id:id,
            initDate,
            finishDate

        })
        
         taskBoard_form.reset();
         taskBoard_form.classList.add("hidden");
         
         
        
           
         //calling creatingNewData
         service. createNewData(BASE_FAKE_API,data)

        

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