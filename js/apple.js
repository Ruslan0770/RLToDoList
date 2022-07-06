function Click() {
    var total = parseInt(document.getElementById("total").value);
    var percent = parseInt(document.getElementById("percent").value);
    var select = document.getElementById("Select").value
    var button = document.getElementById("Button")
    button = (percent * total) / 100;
    var yekun = document.getElementById("yekun")
    document.getElementById("yekun").innerHTML = ('Yekun Hesab :' + (button + total))
    document.getElementById("ayliq").innerHTML = ('Ayliq Odenis :' + (button + total) / select);
}
// task1 end***

let button=document.getElementById("button");
button.onclick=function(){
 let input =document.getElementById('input').value;
 let div=document.createElement("div");
 let i=document.createElement('i');
 let h1=document.createElement('h1');
 h1.innerHTML=input;
 div.setAttribute('class','box');
 i.setAttribute('class','fa-solid fa-trash-can');
 document.getElementById('input').value="";
 div.appendChild(h1);
 div.appendChild(i);
 document.body.appendChild(div);
 i.onclick=function(){
     div.remove();
    }
}

// var inp = document.getElementById("_input")
// var btn = document.getElementById("btn")
// var todos = [];
// btn.addEventListener("click", function () {
//     generateToDo();
//     generateList(todos)
// })
// function generateToDo() {
//     var todovalue = inp.value;
//     var todo = {
//         value: todovalue
//     }
//     todos.push(todo)
// }
// function generateList(todos) {
//     var ulinnerHTML = '';
//     for (let i = 0; i < todos.length; i++) {
//         ulinnerHTML += ` <li>
//         <p>${todos[i].value}</p>
//         <button class="btn1">Delete</button>
//     </li>`
//     }
//     let list=document.getElementById("show");
//     list.innerHTML = ulinnerHTML;
// }

