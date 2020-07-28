


var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    switch (mySrc)
    {
        case 'images/firefox.jpg':
            myImage.setAttribute ('src','images/index.jpg');
            break;
        case 'images/index.jpg':
            myImage.setAttribute ('src','images/123index.jpg');
            break;

        case 'images/123index.jpg':
            myImage.setAttribute ('src','images/firefox.jpg');
            break;
    }
}








