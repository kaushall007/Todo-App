let num = 0;

function func1() {
    // Increment the task counter
    num++;

    // Create task container
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    // Create task details
    let taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");

    // Get input values
    const taskName = document.getElementById("in1").value;
    const taskDate = document.getElementById("dt1").value;
    const dt = new Date();

    // Set task details inner HTML
    taskDetails.innerHTML = `
        <p><strong>Task to be completed:</strong> ${taskName}</p>
        <p><strong>Date to complete:</strong> ${taskDate}</p>
        <p><strong>Submission Date:</strong> ${dt.toDateString()}</p>
    `;

    // Create task completion button
    let taskButton = document.createElement("button");
    taskButton.innerHTML = "Task Completed";
    taskButton.classList.add("task-button");
    taskButton.addEventListener("click", function() {
        // Remove task container on button click
        taskContainer.remove();
    });

    // Append details and button to the container
    taskContainer.appendChild(taskDetails);
    taskContainer.appendChild(taskButton);

    // Append task container to the body
    document.body.appendChild(taskContainer);
}
