function addTask(tasks) {
    let html = `<div class="task">

                <div class="taskimg">
                    <img class="unchecked" src="images/unchecked.png" alt="">
                    
                </div>
                <div class="tasktext">
                    ${tasks}
                </div>
                <div >
                    <svg class="delimg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </div>

        </div>  `

    let mydiv = document.createElement("div");
    mydiv.className = "task";
    // mydiv.style.margin=0;
    // mydiv.style.padding=10px;
    // mydiv.style.width=200px
    mydiv.innerHTML = html;
    let select = document.querySelector(".card");
    select.appendChild(mydiv);



}



let add = document.querySelector('.btn');
let input = document.querySelector(".input");

add.addEventListener("click", () => {

    let val = input.value;
    if (val.trim() != "") {


        addTask(val);
        input.value = "";
    }
});

let card = document.querySelector('.card');
card.addEventListener("click", (event) => {
    if (event.target.classList.contains("unchecked")) {
        let box = event.target;
        if (box.getAttribute('src') === "images/unchecked.png") {
            box.src = "images/checked.png"
            let text = box.closest('.task').querySelector(".tasktext");
            text.style.textDecoration = "line-through";
            box.classList.remove("unchecked");
            box.classList.add("checked");
        }
    }
    else if(event.target.classList.contains("checked")) {

        let box = event.target;
        box.src = "images/unchecked.png"
        let text = box.closest('.task').querySelector(".tasktext");
        text.style.textDecoration = "none";
        box.classList.remove("checked");
        box.classList.add("unchecked");
    }
  
    
})

card.addEventListener("click",(event)=>{
    let cross=event.target;
    if(cross.classList.contains('delimg')){
        let task=cross.closest('.task');
        task.remove();
        
    }
    
})


// card.addEventListener("click", (event) => {
//     let cross = event.target.closest('.delimg'); // Find the closest ancestor with the 'delimg' class
//     if (cross) { // If such an ancestor exists
//         let task = cross.closest('.task'); // Find the task container
//         if (task) {
//             task.remove(); // Remove the task element from the DOM
//         }
//     }
// });

















