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
            <input type="checkbox">
            <div class="task-info">
            <div class="task-head">
            
            <p class="task-text">${input.value}</p>
            <p class="task-time">${date}/${month}/${year}.⏰ ${hours}:${minutes}</p>
            </div>
<hr style="margin:5px 0; border: none; border-top: 1px solid #c6b2e6;">
            <div class="task-body">
            <p class="task-des">${textarea.value}</p>
            <i class="bi bi-trash bin"></i>

             </div>
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
    if (e.target.classList.contains("bin")) {
        e.target.closest(".task-box").remove(); // Remove the full task box
    }
});


function clearAll() {
    location.reload();
}

const addBtn = document.querySelector(".add-task");
const inputArea = document.querySelector(".input-area");

// Show input area after 90° rotation
addBtn.addEventListener("touchstart", function (event) {
    addBtn.classList.add("rotate");

    setTimeout(() => {
        inputArea.style.visibility = "visible";
        addBtn.classList.remove("rotate");
    }, 200);

    // Prevent this click from triggering the document click event
    event.stopPropagation();
});

document.querySelector(".task-list").addEventListener("click", function (e) {
    if (e.target.matches('input[type="checkbox"]')) {
        const taskBox = e.target.closest(".task-box");
        const taskInfo = taskBox.querySelector(".task-info");

        if (e.target.checked) {
            taskInfo.style.borderColor = "#28a745";
            taskBox.style.order = 999;
        } else {
            taskInfo.style.borderColor = "#a489e4"; // Or remove the border if you want
            taskBox.style.order = 0;
            
        }
    }
});





