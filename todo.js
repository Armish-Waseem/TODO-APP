let inp=document.querySelector("input");
let add=document.querySelector(".add");
let ul=document.querySelector("ul");

add.addEventListener("click", function(){
    let item=document.createElement("li")
    let btns=document.createElement("button")
    btns.innerText="Delete";
    btns.classList.add("delete");

    item.innerText=inp.value;
    ul.appendChild(item);
    item.appendChild(btns);

       // Clear the input field after adding a task
       inp.value = '';
})

ul.addEventListener("click", function(event){
    // console.dir(event.target.nodeName)
    if(event.target.nodeName==="BUTTON"){
        let itemname=event.target.parentElement;
        itemname.remove();
    } else if (event.target.nodeName === "LI") {
        // Toggle the 'complete' class on the clicked task
        event.target.classList.toggle("complete");
    }
})
