const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function AddTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value= "";
    storeddata();

}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    storeddata();
  } else if(e.target.tagName==="SPAN") {
    e.target.parentElement.remove();
    storeddata();
  }
}, false);

function storeddata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showlist(){
    listContainer.innerHTML= localStorage.getItem("data");

    
}
showlist();

