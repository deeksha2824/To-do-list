document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const imageInput = document.getElementById("imageInput");
    const taskText = taskInput.value.trim();

    // Alert if task input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return; // Exit the function if input is empty
    }

    const li = document.createElement("li");

    // Create an image element if an image is uploaded
    if (imageInput.files.length > 0) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(imageInput.files[0]);
        img.alt = "Task Image"; // Add alt text for the image
        img.className = "task-image"; // Add a class for styling
        img.onclick = function () {
            li.classList.toggle("completed"); // Toggle completed state
        };
        li.appendChild(img); // Add the image to the list item
    }

    // Create text node for the task
    const taskTextNode = document.createTextNode(taskText);
    li.appendChild(taskTextNode); // Add task text to the list item

    const checkmark = document.createElement("span");
    checkmark.textContent = "✔"; // Unicode check mark
    checkmark.className = "checkmark";
    checkmark.style.display = "none"; // Initially hide the checkmark
    li.appendChild(checkmark); // Add checkmark to the list item

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function () {
        li.remove(); // Remove the task from the list
    };

    li.appendChild(deleteButton); // Add delete button to the list item

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
        checkmark.style.display = li.classList.contains("completed") ? "inline" : "none"; // Show or hide checkmark
    });

    document.getElementById("taskList").appendChild(li); // Append the new task to the list
    taskInput.value = ""; // Clear the input field
    imageInput.value = ""; // Clear the image input
}
