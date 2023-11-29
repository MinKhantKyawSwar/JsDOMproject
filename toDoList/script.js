const arrayList = [];
function updateList(){
   let todolistHtml = '';
   for(let i = 0; i < arrayList.length; i++){
         const todo =  arrayList[i];
         const html = `<p>${todo}</p><button onclick="arrayList.splice(${i},1);
                        updateList()">delete</button>`;
         todolistHtml+=html;
   }
   document.querySelector('.listElements').innerHTML = todolistHtml;
}

function additem(){
   const element = document.querySelector('.todoinput').value;
   if (element ==""){
         alert("Enter at least one word!")
   }
   else{
         arrayList.push(element);
         document.querySelector('.todoinput').value = '';
   }
   updateList();
}