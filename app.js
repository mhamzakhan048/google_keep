let addButton = document.querySelector("#add");
let updateLSData = () => {
  
  let textAreaData = document.querySelectorAll("textarea");
  let notes = [];
  console.log(textAreaData);
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });
  console.log(notes);

  localStorage.setItem("notes", JSON.stringify(notes));
};


let addNewNote = (text = "") => {
  let note = document.createElement("div");
  note.classList.add("note");

  let htmlData = `
    <div class="operation">
        <button class="edit"> <i class="fas fa-edit"></i> </button>
        <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
    </div>

    <div class="main ${text ? "" : "hidden"} "> </div>
    <textarea class="${text ? "hidden" : ""}"></textarea>  `;

  note.insertAdjacentHTML("afterbegin", htmlData);
  // console.log(note);

  let editButton = note.querySelector(".edit");
  let delButton = note.querySelector(".delete");
  let mainDiv = note.querySelector(".main");
  let textArea = note.querySelector("textarea");

  delButton.addEventListener("click", () => {
    note.remove();
    updateLSData();
  });

  textArea.value = text;
  mainDiv.innerHTML = text;

  editButton.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("change", (event) => {
    let value = event.target.value;
    mainDiv.innerHTML = value;

    updateLSData();
  });

  document.body.appendChild(note);
};

// data back from localStorage
let notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addButton.addEventListener("click", () => addNewNote());



// let addButton = document.querySelector("#add");

// let updateLSData = () => {
//     let textAreaData = document.querySelector("textarea")
//     let notes = [];
//     console.log(textAreaData);
//     textAreaData.foreach((note) => {
//         return notes.push(note.value);
//     });
//     console.log(notes);
//     localStorage.setItem("notes", JSON.stringify(notes));
// };

// let addNewNote = (text = "") => {
//     let note = document.createElement("div");
//     note.classList.add("note");

//     let htmlData = `
//     <div class="operation">
//         <button class="edit"> <i class="fas fa-edit"></i> </button>
//         <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
//     </div>

//     <div class="main ${text ? "" : "hidden"} "> </div>
//     <textarea class="${text ? "hidden" : ""}"></textarea> `;

//     note.insertAdjacentHTML("afterbegin", htmlData);

//     let editButton = note.querySelector(".edit");
//     let delButton = note.querySelector(".delete");
//     let mainDiv = note.querySelector(".main");
//     let textArea = note.querySelector(".textarea");

//     delButton.addEventListener("click", () => {
//         note.remove();
//         updateLSData();
//     });


//     textArea.value = text;
//     mainDiv.innerHTML = text;
  
//     editButton.addEventListener("click", () => {
//       mainDiv.classList.toggle("hidden");
//       textArea.classList.toggle("hidden");
//     });
  
//     textArea.addEventListener("change", (event) => {
//       const value = event.target.value;
//       mainDiv.innerHTML = value;
  
//       updateLSData();
//     });

//     document.body.appendChild(child);

// }

// let notes = JSON.parse(localStorage.getItem("notes"));
// if (notes) {
//     notes.forEach((note) => addNewNote(note));
// }

// addButton.addEventListener("click", () => addNewNote());