let chessTable = document.getElementById("chessboard");
let selectedCell;

chessTable.addEventListener("click", function(event){
    let target = event.target; // this gives the element that has been clicked
    if(target.tagName !='TD') //if the target is not a td (which means the user clicked on something different than a cell of the chessboard), we don't do anything. Note, if you write  target.tagName != 'td', it doesn't work. Why?
    {
        return;
       
    }
    
    //highlight
    //console.log(target);
    highlightSelectedCell(target);
});

function highlightSelectedCell(tdCell)
{
    if(selectedCell){
        selectedCell.classList.remove('selected'); //if the cell is already selected, we remove the color
    }
    selectedCell = tdCell;
    selectedCell.classList.add('selected');
}

let aHref = document.getElementById('a_href');
aHref.addEventListener('click',function(event){
    event.preventDefault(); //prevent the default action
    alert("Uni.lu"); //New action to perform in place of the preveented one.
})