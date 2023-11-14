/*Function imageReport: processes images in the document.
It returns an object containing the total number of images, of images of preallocated sizes,
of accessible images, of responsive images, and of images loaded from an external domain. */
function imageReport()
{
    /*Array containing all images of the document*/
    let images = document.getElementsByTagName('img'); 
    /*Total number of images*/ 
    let total = images.length;
    /*Name of the local host*/
    let localhost = window.location.hostname;
    /*Number of images of preallocated sizes*/
    let measured = 0;
    /*Number of accessible images*/
    let accessible = 0;
    /*Number of responsive images*/
    let responsive = 0;
    /*Number of images loaded from an external domain*/
    let extDomain = 0;

    for (let i of images)
    {
        /*For each image of the array, if the image has the attributes "width" and "height",
        then it is of preallocated size : We increment the number of images of preallocated size (measured ++)*/
        if (i.getAttribute('width') && i.getAttribute('height'))
        {
            measured ++;
        }
        /*If the image has an alt attribute, then it is accessible*/
        if(i.getAttribute('alt'))
        {
            accessible ++;
        }
        /*If an image has a srcset attribute. then, it is responsive */
        if (i.getAttribute('srcset'))
        {
            responsive ++;
        }
        /*If the value of the attribute "src" of the image has a hostname that is different from the local hostname,
        then, the image is loaded from an external domain.*/
        if(new URL(i.getAttribute('src'),window.location).hostname !== localhost) 
        {
            extDomain ++;
        }
               

    }
    //we return the object containing all the properties and their values
    return {total : total, measured : measured, accessible : accessible, responsive : responsive, external : extDomain};

}

