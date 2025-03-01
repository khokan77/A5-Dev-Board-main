document.getElementById("task1").addEventListener("click", function (event) {
  event.preventDefault();
  const text = document.getElementById("task-count").innerText;
  document.getElementById("task-count").innerText = parseInt(text) - 1;
  var elem = document.getElementById("task1");
  elem.classList.remove("btn-active");
  elem.classList.add("btn-disabled");
});
