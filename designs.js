// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const rows = document.querySelector("#inputHeight");
const cells = document.querySelector("#inputWidth");
const tableRef = document.querySelector("#pixelCanvas");

function makeGrid() {
  tableRef.innerHTML = "";

  for (let i = 1; i <= rows.value; i++) {
    let newRow = tableRef.insertRow();

    for (let x = 1; x <= cells.value; x++) {
      let newCell = newRow.insertCell();
      newCell;
    }
  }

  let singleCell = document.querySelectorAll("td");

  singleCell.forEach(function (cell) {
    cell.addEventListener("click", function (e) {
      if (e.target.style.backgroundColor == "") {
        e.target.style.backgroundColor = colorPicker.value;
      } else {
        e.target.style.backgroundColor = "";
      }
    });
  });
}

const submit = document.querySelector("#submitButton");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  makeGrid();
});
