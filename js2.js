let table = document.querySelector('table');

if (table) {
    let rows = 5;
    let columns = 5;

    for (let i = 0; i < rows; i++) {
        let newRow = table.insertRow();
        for (let j = 0; j < columns; j++) {
            let newCell = newRow.insertCell();
        }
    }

    let cells = table.getElementsByTagName('td');

    for (let i = 0; i < cells.length; i++) {
        let rowIndex = Math.floor(i / columns);
        let colIndex = i % columns;

        if ((rowIndex + colIndex) % 2 === 0) {
            cells[i].classList.add('selected');
        }
    }
} else {
    console.warn("Table element not found in the document.");
}
