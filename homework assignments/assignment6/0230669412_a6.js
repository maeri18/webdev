function createTOC(domNode)
{
    let toc = document.createElement('ul');
    toc.id = "toc";
    let headings = [];
    
    for (let i=2;i<=6;i++)
    {
        headings = domNode.getElementsByTagName("h"+String(i));
        //console.log(headings);
        
        for(h of headings)// of headings)
        {
            console.log(h);
            /*
        let newElem = document.createElement("li");
        
        newElem.setAttribute("data-heading",String(i));
         if(h.id)
        {
            let anchor = document.createElement('a');
            anchor.setAttribute("href","#"+String(h.id));
            newElem.prepend(anchor);
        }
        newElem.innerText = h.innerText;
        toc.append(newElem);*/
        }
        
    }   
document.body.prepend(toc);
}
createTOC(document.body);
