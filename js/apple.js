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


// var btn = document.getElementById('btn');
// var avg = [];
// btn.onclick = function () {
//     // var h1 = document.createElement('h1');
//     // h1.innerHTML = input;
//     var input = document.getElementById("_input").value;
//     var codeBlock = `
//                 <li>
//                     <p>${input}</p>
//                     <button id="btn1">Delete</button>
//                     </li>`;
//                     // var show=document.getElementById('show');
//                     // for(i=0; i< avg.length; i++){
//         avg.push(codeBlock)
//         document.getElementById('show').innerHTML = avg
        
//     //     var last = avg[i];
//     // }
    
    



// //     forEach(x => {
// //         avg += `
// //         <li>
// //                 <p>${x.input}</p>
// //             <button id="btn1">Delete</button>
// //         </li>
            
// //         `
// // document.getElementById('show').innerHTML = avg;
// //     });
   

// }



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
 

