import { service } from "./gettiingData.js";
import BASE_FAKE_API from "./personal.js";

const createTaskContainer=({
    tituloTask,
    responsableTask,
    plazoTask,
    id,
    initDate,
    finishDate

})=>{


    const div = document.createElement("div");
    div.classList.add("task-div")
    div.setAttribute("id",`${id}`)

    const close=document.createElement("span");
    close.classList.add("task-div__close");
    close.innerText="X";

    const h3 = document.createElement("h3");
    h3.classList.add("task-div__title")
    h3.innerText = tituloTask;

    const p = document.createElement("p");
    p.classList.add("task-div__responable")
    p.innerText = responsableTask;

   const p2 = document.createElement("p");
   p2.classList.add("task-div__schedule");
   p2.innerText = plazoTask;

    const p3= document.createElement("p");
    p3.classList.add("task-div__initDate");
    p3.innerText = initDate;

   
    

    div.append(close,h3,p,p2,p3);
    if(finishDate!==""){
     const p4= document.createElement("p");
      p4.classList.add("task-div__finishDate");
      p4.innerText = finishDate;

      div.appendChild(p4)
    }

     //adding listener to close span and delete task
     close.onclick=(e)=>{
       e.preventDefault();

        service.deleteData(BASE_FAKE_API,id);
     }

     //listening the board's change in every div to update the board info
     div.addEventListener("touchend",function(event){
      
       //getting the div info
       const title=this.querySelector(".task-div__title").innerText;
       const responsable= this.querySelector(".task-div__responable").innerText;
       const schedule= this.querySelector(".task-div__schedule").innerText;
       let initDate=this.querySelector(".task-div__initDate").innerText;

      
     
       
       const id=this.getAttribute("id");
       //creating data object
     

      //getting the parent container class and checking it
         let board=div.parentElement.classList;
         if(board.contains('taskBoard-toDo')){
            board='to-do'
            
         }
         else if(board.contains('taskBoard-doing')){
            board='doing'
            
             

         }
         else if(board.contains('taskBoard-done')){
            board='done'
             initDate=initDate
             finishDate=moment().format('DD/MM/Y');
            finishDate=`Fecha finalización ${finishDate}`;
         }
               const data={
               title,
               User:responsable,
               Date:schedule,
               board,
               initDate,
               finishDate
            }    
            service.updateData(BASE_FAKE_API,id,data)

            
        
     })
       
     
   
    return div;

}

export default createTaskContainer;