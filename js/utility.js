function getTextByElemntId(id) {
  return document.getElementById(id).innerText;
}

function setTextByElementId(id, text) {
  document.getElementById(id).value = text;
}

function toggleElementVisibility(id) {
  var elem = document.getElementById(id);
  if (elem.style.display == "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function toggleElementenable(id) {
  var elem = document.getElementById(id);
  if (elem.disabled) {
    elem.disabled = false;
  } else {
    elem.disabled = true;
  }
}

function taskUpdatedOnClick(add, sub, task, taskTitle) {
  let countSub = document.getElementById(add);
  countSub.innerText = parseInt(countSub.innerText) + 1;

  let countAdd = document.getElementById(sub);
  countAdd.innerText = parseInt(countAdd.innerText) - 1;

  const tastText = document.getElementById(taskTitle).innerText;

  var task = document.getElementById(task);
  task.classList.remove("btn-active");
  task.classList.add("btn-disabled");

  const paragraph = document.createElement("p");

  paragraph.classList.add(
    "bg-[#F4F7FF]",
    "p-4",
    "rounded-lg",
    "text-center",
    "text-gray-600"
  );

  // Add text content
  paragraph.textContent =
    "You have complated the task " +
    tastText +
    " at " +
    new Date().toLocaleTimeString();

  document.getElementById("task-list").appendChild(paragraph);
  const brek = document.createElement("br");
  document.getElementById("task-list").appendChild(brek);
}
