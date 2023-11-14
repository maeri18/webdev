/*Function makeSortable:
It takes a TABLE element as argument, and implements the following:
* When clicking on the heading of a column of the table, the first click 
sorts the whole table in ascending order. The second click on the same heading
 sorts the table in descending order. The third click sorts the table in ascending
order, the fourth click sorts the table in descending order, and so on.

* The first click on the heading of a specific column always sorts the 
whole table in ascending order. Similarly, the second click on the heading 
of a specific column always sorts the whole table in descending order, 
and so on.

*For example, if we click on the heading of the first column for the first time, 
then the whole table is sorted in ascending order. After that, if we click 
on the heading of the second column for the first time, the table is sorted in 
ascending order again.

*Implementation
- To implement the previous behavior, the function makeSortable loads the list of 'tr' 
elements in an array called "rows". Then, it loads the 'th' elements of the table in 
an array called "columnsHead", with the value 0 before every column heading. This 
value will help keeping track of how many time we clicked on the corresponding heading.

- Then, for each 'th' element we add a click event handling funtion that will do the following:
    -- Copy the array of rows "rows" into a new one "rowsClone", because "rows" is going to be 
    modified in the handling function's body.
    -- For each row that is different from the heading row, push the text contained in the cell
    corresponding to the column on which we clicked in an empty array called "columnTab". 
    -- We sort "columnTab" in ascending order or descending order according to how many clicks we 
    already did on that column's heading. Since we start counting at 0, an odd number of clicks,
     leads to sorting "columnTab" in descending order, and for an even number of clicks, we sort "columTab" 
     in ascending order.
    -- For each row rows[td] of the table body, we pass through each row
     of the copied array "rowsClone". If we find an row r1 of "rowsClone" that contains
     a cell with the element at index (td-1)  of the sorted array "columnTab", then we replace rows[td]
     with a copy  of r1. This will sort the table according to the sorting order in "columTab"
    -- We add one to the number of clicks we already did on that column's heading.

*/
function makeSortable(table)
{
    
    let rows = table.getElementsByTagName('tr'); 
    let columnsHead = []; //contains columns' headings

    let columnTab = []; //for sorting the column on which we clicked
    
    for (let h of rows[0].getElementsByTagName('th'))
    {
        columnsHead.push(0);
        columnsHead.push(h);   
    }
    for (let c=0; c<columnsHead.length;c++)
    {
        if(c%2==1)
        {
            columnsHead[c].addEventListener("click", function(){
                let rowsClone = Object.assign([],rows);
                columnTab = [];
                for(let td=1; td<rows.length;td++)
                {columnTab.push(rows[td].children[(c-1)/2].innerText);}//loading column content in columTab
                if((columnsHead[c-1])%2==0)
                {
                    columnTab.sort();//sort ascending
                }
                else
                {
                    columnTab.sort().reverse();//sort descending
                }
                for(td=1;td<rows.length;td++)
                {
                    for(let k=1; k<rowsClone.length; k++)
                    {
                        if(rowsClone[k].children[(c-1)/2].innerText==columnTab[td-1])
                        {
                            rows[td].replaceWith(rowsClone[k].cloneNode(true));
                            break;
                        }
                    }                    
                }
            
                columnsHead[c-1] ++; //updating clicks number
            });
        }
    }
    
}
