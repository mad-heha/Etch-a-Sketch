const container = document.getElementById("grid-container");
let row = document.getElementsByClassName("grid-row");
let column = document.getElementsByClassName("grid-column");

//event listener that gets the new grid size and prevents grid size from being bigger than 100
document.querySelector('#button').addEventListener('click', function() {
    empty();
    var newSize = prompt("Please provide a new grid size");
    if(newSize>100)
        alert("Too large! No more than 100");
    else {
        makeGrid(newSize);    
    }
})

//removes previous grid
function empty() {
    for(i=0; i=row.length; i++){
        container.removeChild(container.firstChild);
    }
}

//initializes grid 16x16
makeGrid(16);

//sends size to respective functions to create grid 
function makeGrid(num) {
    makeRows(num);
    makeColumns(num);
}

//creates grid's rows
function makeRows(rowNum) {
    for(i=0; i<rowNum; i++){
        let rowNumber = document.createElement("div");
        container.appendChild(rowNumber).className = "grid-row";
    }
}

//creates grid's cells/columns
function makeColumns(colNum){
    for(i=0;i<row.length;i++){
        for(j=0;j<colNum;j++){
            let cell = document.createElement("div");
            cell.addEventListener('mouseover', function(){
                cell.classList.add('fill');
            })
            row[j].appendChild(cell).className = "grid-column";
        }
    }
}