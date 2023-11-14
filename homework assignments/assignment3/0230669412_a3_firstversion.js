function addCoverage(invoices, coveragePercentage)
{ //maybe use switch case
    let resultList = [];
    let lastElem;
    
    if(invoices == undefined || coveragePercentage == undefined) 
    {
    throw new SyntaxError("Missing arguments");
    }
    else if(isNaN(coveragePercentage))
    {
        throw new TypeError("Invalid data type");
    }
    if(coveragePercentage<0 || coveragePercentage>100)
    {
        throw new RangeError("Coverage percentage must be between 0 and 100");   
    }
    for (let i of invoices)
    {
        if(!(i.id && i.amount))
        {
            throw new Error( "Missing invoice data");
        }
        if(i.amount<0)
        {
            throw new TypeError("Invalid data type");
        }

        let copy = Object.assign({},i);
        resultList.push(copy);
        resultList[(resultList.length) -1].coverage = (coveragePercentage * (resultList[(resultList.length) -1].amount)/100);    
        
    }
    return resultList;


}
    
// Example of a list of invoices.
let invoices = [ { id: "A12345", amount: 100 }, { id: "B67890", amount: 5 } ];

// This should throw a SyntaxError because the function is called without arguments.
//console.log(addCoverage());

// This should throw a generic Error because the invoice in this case has no amount.
//console.log(addCoverage([{id: "C81734"}], 50));

// This should throw a TypeError because the coveragePercentage is a string.
//console.log(addCoverage(invoices, "something"));

// This should throw a RangeError because the coveragePercentage is greater than 100.
//console.log(addCoverage(invoices, 101));

// This should return a list of processed invoices, where each invoice gets added a coverage of 50%.
console.log(addCoverage(invoices, 50));
// [
//   { id: "A12345", amount: 100, coverage: 50 },
//   { id: "B67890", amount: 5, coverage: 2.5 }
// 