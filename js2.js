
    let table = document.querySelector('table');

    let row = 5;
    let col = 5;

    for(let i = 0; i<row; i++){
        let row = table.insertRow();
        for( let j = 0; j< col; j++){
            let col = row.insertCell();
        }
    }

    let cell = table.getElementsByTagName('td');
    for(let i =0; i<cell.length; i++){
        if ((Math.floor(i / col) + i % col) % 2 === 0) {
            cell[i].classList.add('selected');
        }
    }


