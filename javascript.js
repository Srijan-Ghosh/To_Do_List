 if (localStorage.getItem(0) < 1 || localStorage.getItem(0) == null) {
            localStorage.setItem(0, 1);
        }
        let count = localStorage.getItem(0);

        for (var i = 2; i <= count; i++) {
            let task = localStorage.getItem(i);
            const taskHTML = `
        <div class="task-box">
            <div class="task-head">
            <p class="task-text">${count}. ${task}</p>
            <p class="task-time">⏰ ${hours}:${minutes}</p>
            </div>
            <hr style="margin:2px 0;">
            <div class="task-body">
            <p class="task-des">${textarea.value}</p>
            <i class="fa-solid fa-trash bin"></i>
            </div>
        </div>
    `;

            document.querySelector(".task-list").insertAdjacentHTML("beforeend", taskHTML);
        }


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

            localStorage.setItem(count, taskHTML);
            count++;
            localStorage.setItem(0, count);
            input.value = "";
        }

        function refresh() {
            localStorage.clear();
            location.reload();
        }

        const addBtn = document.querySelector(".add-task");
    const inputArea = document.querySelector(".input-area");

    // Show input area after 90° rotation
    addBtn.addEventListener("click", function (event) {
        addBtn.classList.add("rotate");

        setTimeout(() => {
            inputArea.style.visibility = "visible";
            addBtn.classList.remove("rotate");
        }, 200);

        // Prevent this click from triggering the document click event
        event.stopPropagation();
    });

    // Prevent hiding if you click inside input-area
    inputArea.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // Hide input-area when clicking anywhere else
    document.addEventListener("click", function () {
        inputArea.style.visibility = "hidden";
    });





