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
