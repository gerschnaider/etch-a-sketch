function deleteGrid(){
    while(gridDiv.firstChild){
        //deletes all childs 
        gridDiv.removeChild(gridDiv.lastChild);
    }
}

function generateGrid(rows, columns){
    let rowDiv, div;
    for(let i=0;i<rows;i++){
        rowDiv = document.createElement("div");
        rowDiv.className="row";
        for(let j=0;j<columns;j++){
            div = document.createElement("div");
            div.className="cell";
            rowDiv.append(div);
        }
        gridDiv.append(rowDiv);
    }
}

//frequently accessed elements
let gridDiv = document.querySelector(".grid");
let buttonSetSize = document.querySelector(".gridSizeButton");


gridDiv.addEventListener("mouseover", (event) => {
    if(event.target.className==="cell") //target is a descendant cell
    event.target.style.backgroundColor="black";
});

buttonSetSize.addEventListener("click", (event) => {
    //doesn't check if input is a number, to be checked
    rows=cols=prompt("Input the new grid size: ");
    deleteGrid();
    generateGrid(rows,cols);
});
    
let rows=16, cols=16;
generateGrid(rows, cols);
