let listContainer = document.querySelector(".listContainer");
let addInput = document.querySelector("#addInput");
let addBtn = document.querySelector(".addBtn");

let list = [];

function renderList(arr) {
  listContainer.innerHTML = "";
  arr.map((obj) => {
    let divElem = document.createElement("div");

    divElem.classList.add("list");

    let { id, text } = obj;

    divElem.innerHTML = `

            <p>${text}</p>
  `;

    let buttonElem = document.createElement("button");
    buttonElem.innerHTML =
      '<i class="fa-solid fa-trash-can fa-xl" style="color: rgb(135, 58, 58);"></i>';

    divElem.appendChild(buttonElem);

    buttonElem.onclick = () => {
      handleRemoveList(obj.id);
    };

    listContainer.append(divElem);
  });
}

renderList(list);

//ADD FUNCTIONALITY

function handleAddList() {
  if (addInput.value.trim() === "") return;

  let obj = {
    id: Date.now(),
    text: addInput.value,
  };

  list.unshift(obj);
  addInput.value = "";
  renderList(list);
}

function handleRemoveList(id) {
 
   list = list.filter((obj)=>{

     return obj.id!==id;

  });

  renderList(list);
}

addBtn.addEventListener("click", handleAddList);
