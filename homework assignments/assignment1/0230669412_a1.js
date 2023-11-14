   
// Task 1 : Variable countZeros

let countZeros = 0; //counter that will contain the total amount of zeros
for (let l=0; l<M.length; l++) //for loop to iterate on indexes of every list of the matrix
{
    for(let i=0; i<M[l].length; i++) //for loop to iterate on indexes of every element of the list
     {
        
        if(M[l][i]==0) //Test on the value of the entry M[l][i] 
        {
            countZeros = countZeros + 1; //If the entry is equal to zero, then, we increment the counter (countZeros)
        }
    }
}


// Task 2 : Variable countObstacles
let countObstacles = 0; //counter that will contain the total amount of obstacles

for (let l=0;l<M.length;l++) //loop to iterate on every list's index of the matrix
{
    for(let i=0;i<M[l].length;i++)// loop to iterate on index of every element of the list
     {
        
        if(M[l][i]>0)// Test on the value of M[l][i]
        {
            countObstacles ++; //if it's an obstacle (M[l][i]>0), then we increment the counter
        }
    }
}

 //task 3 : replacing all entries that are greater then or equal to 2 by the double of that value

 for (let l=0;l<M.length;l++)  //loop to iterate on every list's index of the matrix 
{

    for(let i=0;i<M[l].length;i++) //loop to iterate on indexes of every element of the list
    {
        
        if(M[l][i]>=2)//Test on the value of M[l][i]
        {
            M[l][i] = M[l][i] * 2; //if the element M[l][i] is greater or equal to 2, we double its value.
        }
    }
}
