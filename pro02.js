document.querySelector('#push').onclick = function () {
    let input = document.querySelector('#taskInput');

    if (input.value.trim().length === 0) {
        alert("Please enter a task.");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="tasked">
                <span id="taskname">${input.value}</span>
                <button class="delete">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;

        // Delete Button Functionality
        let deleteButtons = document.querySelectorAll('.delete');
        deleteButtons.forEach(btn => {
            btn.onclick = function () {
                this.parentNode.remove();
            }
        });

        // Mark as Completed
        let tasks = document.querySelectorAll('.tasked');
        tasks.forEach(task => {
            task.onclick = function () {
                this.classList.toggle('completed');
            };
        });

        // Clear input
        input.value = "";
    }
}
