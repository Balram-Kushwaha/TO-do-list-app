
// note taking app

const notes_conatiner = document.querySelector(".notes-container")

const creatbtn = document.querySelector(".btn");

let notes = document.querySelectorAll("input-box");

function refreshPage() {
    location.reload();
}

function showNotes(){
    notes_conatiner.innerHTML = localStorage.getItem("notes");
}

showNotes();

function upDateStorage(){
    localStorage.setItem("notes", notes_conatiner.innerHTML);
}

 creatbtn.addEventListener("click", function(){
    let inputbox = document.createElement('p');
    let image = document.createElement('img');
    inputbox.className = "input-box relative min-h-40 max-w-[35rem] bg-white p-5 m-5 rounded-xl outline-none "
    inputbox.setAttribute("contenteditable", "true"); 
    inputbox.setAttribute("palceholder", "Add your text") 
    image.src = "icons8-delete-30.png"
    image.className = "fas fa-trash-alt w-5 h-5 bottom-5 right-3 mr-5 absolute cursor-pointer"
    notes_conatiner.appendChild(inputbox).appendChild(image);
    upDateStorage();
  
})

notes_conatiner.addEventListener("click", function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        upDateStorage();  
    
    }
    else if(e.target.tagName ==='P'){
        let notes = document.querySelector(".input-box");

        notes.forEach(e => {
            e.onkeyup = function(){
                upDateStorage();
               
                showNotes();
            }
        });
    }
})

// to-do-App 

const list_container = document.querySelector(".list-container");
let taskInput = document.querySelector("#task-input");
let addBtn = document.querySelector("#add-button");
let list = document.querySelector(".list-item");

function showList(){
    list_container.innerHTML = localStorage.getItem("list");
}

showList();

function upDateStorageList(){
    localStorage.setItem("list", list_container.innerHTML);
}

addBtn.addEventListener("click",function(){

    // create li element and set class name for styling
    let newLi=document.createElement('li');
    newLi.className="relative  list-item mt-2 p-2  font-bold user-select-non pl-8"
    let image = document.createElement('img');
    image.src="icons8-delete-30.png";
    image.className = "fas fa-trash-alt w-5 h-5  right-1 absolute cursor-pointer"
    newLi.textContent = taskInput.value;
    list_container.appendChild(newLi).appendChild(image);
    taskInput.value =" ";
   
    upDateStorageList();
    refreshPage();
   
})

list_container.addEventListener("click", function(e){
  
     if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
     }
     else if(e.target.tagName ==="LI"){
       e.target.classList.toggle("checked");
     }

     upDateStorageList();  

})


















