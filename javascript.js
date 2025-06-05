let count = 1;

function add() {
    const now = new Date(); // Get current date and time
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const input = document.querySelector("#inputbox");
    let p = document.createElement("div");
    p.innerText = count + ". " + input.value + " | " + hours + ":" + minutes;
    document.querySelector(".task-list").appendChild(p)
    localStorage.setItem(count, p.innerText);
    count++;
    
}


