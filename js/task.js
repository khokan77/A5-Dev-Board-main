document.getElementById("task1").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board Updated Successfully");
  taskUpdatedOnClick(
    "task-count-add",
    "task-count-sub",
    "task1",
    "task1-title"
  );
});

document.getElementById("task2").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board Updated Successfully");
  taskUpdatedOnClick(
    "task-count-add",
    "task-count-sub",
    "task2",
    "task2-title"
  );
});

document.getElementById("task3").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board Updated Successfully");
  taskUpdatedOnClick(
    "task-count-add",
    "task-count-sub",
    "task3",
    "task3-title"
  );
});

document.getElementById("task4").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board Updated Successfully");
  taskUpdatedOnClick(
    "task-count-add",
    "task-count-sub",
    "task4",
    "task4-title"
  );
});

document.getElementById("task5").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board Updated Successfully");
  taskUpdatedOnClick(
    "task-count-add",
    "task-count-sub",
    "task5",
    "task5-title"
  );
});

document.getElementById("task6").addEventListener("click", function (event) {
  event.preventDefault();
  alert("Board Updated Successfully");
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

function changeTheme() {
  const colors = [
    "bg-[#F4F7FF]",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-red-100",
  ];
  document.body.className = colors[Math.floor(Math.random() * colors.length)];
  document.body.classList.add(
    "poppin-font",
    "w-full",
    "bg-cover",
    "rounded-lg",
    "bg-center",
    "border-2",
    "m-0"
  );
}
