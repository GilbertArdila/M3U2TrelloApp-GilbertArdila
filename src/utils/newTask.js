function newTask(){
   //showing/hidding  form
   newTask_button.onclick=(e)=>{
    e.preventDefault();
    taskBoard_form.classList.toggle("hidden");
 }

 //sending form info
 create.onclick=(e)=>{
    e.preventDefault();
    //obtenemos los datos del formulario
    const tituloTask=`Titulo: ${titulo.value}`;
    const responsableTask=`Responsable: ${responsable.value}`;
    const plazoTask=`Plazo de entrega: ${plazo.value}`;
    //it title is not empty
     if(titulo.value!="" ){
         //create a div
         const div = document.createElement("div");
         div.classList.add("task-div")

         const h3 = document.createElement("h3");
         h3.innerText = tituloTask;

         const p = document.createElement("p");
         p.innerText = responsableTask;

         const p2 = document.createElement("p");
         p2.innerText = plazoTask;

         div.appendChild(h3);
         div.appendChild(p);
         div.appendChild(p2);

         todoDiv.appendChild(div);
         taskBoard_form.reset();
         taskBoard_form.classList.add("hidden");
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