//ADDING TASKS
function add() {
    const now = new Date();
    const date = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const textarea = document.querySelector("textarea")
    const input = document.querySelector("input");


    if (input.value.trim() === "") return;

    const taskHTML = `
        <div class="task-box">
        <div class="ckeck-arrow">
            <input type="checkbox">
            
            <i class="fa-solid fa-chevron-down arrow"></i>
            </div>
            <div class="task-info">
            <div class="task-head">
            
            <p class="task-text">${input.value}</p>
            <p class="task-time"><i class="fa-solid fa-calendar"></i>${date}/${month}/${year}.⏰ ${hours}:${minutes}</p>
            </div>
<hr style="margin:5px 0; border: none; border-top: 1px solid #c6b2e6;">
            <p class="task-des">${textarea.value}</p>
            <i class="bi bi-trash bin"></i>

            </div>
        </div>
        </div>
    `;

    document.querySelector(".task-list").insertAdjacentHTML("beforeend", taskHTML);

    const taskObj = {
        id: count,
        name: input.value,
        description: textarea.value,
        date: `${date}/${month + 1}/${year}.⏰ ${hours}:${minutes}`
    };

    input.value = "";
}

document.querySelector(".task-list").addEventListener("click", function (e) {
    if (e.target.classList.contains("bin") && confirm("Delete this task")) {
        e.target.closest(".task-box").remove(); // Remove the full task box
    }
});

//CLEAR ALL
function refresh() {
    location.reload();
}

// const addBtn = document.querySelector(".add-task");
// const inputArea = document.querySelector(".input-area");

// Show input area after 90° rotation
// addBtn.addEventListener("click", function (event) {
//     addBtn.classList.add("rotate");

// setTimeout(() => {
//     inputArea.style.visibility = "visible";
//     addBtn.classList.remove("rotate");
// }, 200);

// // Prevent this click from triggering the document click event
// event.stopPropagation();
// });

//INPUT BOX SHOW/HIDE
const inputArea = document.querySelector('.input-area');
const addTaskBtn = document.querySelector('.add-task');
const inputCross = document.querySelector('.input-cross');

addTaskBtn.addEventListener('click', () => {
    inputArea.classList.add('show');
});

inputCross.addEventListener('click', () => {
    inputArea.classList.remove('show');
});

//for checkbox function
document.querySelector(".task-list").addEventListener("click", function (e) {
    if (e.target.matches('input[type="checkbox"]')) {
        const taskBox = e.target.closest(".task-box");
        const taskInfo = taskBox.querySelector(".task-info");

        if (e.target.checked) {
            taskInfo.style.borderColor = "#28a745";
            taskBox.classList.add("card-order");
        } else {
            taskInfo.style.borderColor = "#a489e4"; // Or remove the border if you want
            taskBox.classList.remove("card-order");

        }
    }
});

document.querySelector(".task-list").addEventListener("click", function (e) {
    const taskBox = e.target.closest(".task-box");
    if (e.target.classList.contains("arrow")) {
        taskBox.classList.toggle("details");
        e.target.classList.toggle("rotate");


    }
});


