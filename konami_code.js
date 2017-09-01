const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
  window.addEventListener('keydown', coding)
}

function coding(e) {
  const key = parseInt(e.detail || e.which);
  if (key === code[index]) {
    console.log(key)
    index++;
    console.log(">>> "+index)
    if (index === code.length) {
      alert("You Did It");
      index = 0;
      console.log(">>> "+index)
    }
  } else {
    console.log(key)
    index = 0;
    console.log(">>> "+index)
  }
}
