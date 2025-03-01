document.getElementById("task1").addEventListener("click", function (event) {
  event.preventDefault();
  taskUpdatedOnClick(
    "task-count-add",
    "task-count-sub",
    "task1",
    "task1-title"
  );
});

document.getElementById("task2").addEventListener("click", function (event) {
  event.preventDefault();
  taskUpdatedOnClick(
    "task-count-add",
    "task-count-sub",
    "task2",
    "task2-title"
  );
});

document.getElementById("task3").addEventListener("click", function (event) {
  event.preventDefault();
  taskUpdatedOnClick(
    "task-count-add",
    "task-count-sub",
    "task3",
    "task3-title"
  );
});

document.getElementById("task4").addEventListener("click", function (event) {
  event.preventDefault();
  taskUpdatedOnClick(
    "task-count-add",
    "task-count-sub",
    "task4",
    "task4-title"
  );
});

document.getElementById("task5").addEventListener("click", function (event) {
  event.preventDefault();
  taskUpdatedOnClick(
    "task-count-add",
    "task-count-sub",
    "task5",
    "task5-title"
  );
});

document.getElementById("task6").addEventListener("click", function (event) {
  event.preventDefault();
  taskUpdatedOnClick(
    "task-count-add",
    "task-count-sub",
    "task6",
    "task6-title"
  );
});

document
  .getElementById("task-clear")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("task-list").innerHTML = "";
  });
