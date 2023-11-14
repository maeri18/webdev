/*function addCoverage: Takes an array of invoices,
and a coverage percentage and adds a computed coverage percentage to each invoice.*/
function addCoverage(invoices, coveragePercentage)
{ 
    let resultList = [];  //resulting array 

    /*First case : if whether the invoices or the coverage percentage are missing,(== undefined), 
    we throw a SyntaxError*/
    if(invoices == undefined || coveragePercentage == undefined) 
    {
        throw new SyntaxError("Missing arguments");
    }
    /*Second case : if the coverage percentage is not a number (isNaN), 
    we throw a TypeError*/
    if(isNaN(coveragePercentage))
    {
        throw new TypeError("Invalid data type");
    }
    /*Third case : if the coverage percentage is not in the [0,100] range ,
    we throw a RangeError */
    if(coveragePercentage<0 || coveragePercentage>100)
    {
        throw new RangeError("Coverage percentage must be between 0 and 100");   
    }
    
    //For loop to calculate and add the coverage for each element of the invoices array.
    for (let i of invoices)
    {
        //copying each object into a new container to avoid modifying the original array
        let copy = Object.assign({},i);
        copy.coverage = coveragePercentage * copy.amount /100; //coverage calculation
        resultList.push(copy);     
    }
    
    /*Verifying if the first invoice of the resulting array has the properties : id and amount, with amount >=0
    If it is the case, we return the resulting array.
    If not, we throw the corresponding errors.
    */
    let r = resultList[0]; 
    
        if(!(r.id && r.amount))
        {
            throw new Error( "Missing invoice data");
        }
        if(r.amount<0)
        {
            throw new TypeError("Invalid data type");
        }
        
    return resultList;
    
}
    