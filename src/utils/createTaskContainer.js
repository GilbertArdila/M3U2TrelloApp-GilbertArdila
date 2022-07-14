import { service } from "./gettiingData.js";
import BASE_FAKE_API from "./personal.js";

const createTaskContainer=({
    tituloTask,
    responsableTask,
    plazoTask,
    id

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

    div.append(close,h3,p,p2);

     //adding listener to close span and delete task
     close.onclick=()=>{
       
        service.deleteData(BASE_FAKE_API,id);
     }

     //listening the board's change in every div to update the board info
     div.addEventListener("touchend",function(event){
      
       //getting the div info
       let title=this.querySelector(".task-div__title").innerText;
       const responsable= this.querySelector(".task-div__responable").innerText;
       const schedule= this.querySelector(".task-div__schedule").innerText;
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
            
         }
               const data={
               title,
               User:responsable,
               Date:schedule,
               board
            }    
            service.updateData(BASE_FAKE_API,id,data)

            console.log({
               title,
               responsable,
               schedule,
               board,
               id
            })
        
     })
       
     
   
    return div;

}

export default createTaskContainer;