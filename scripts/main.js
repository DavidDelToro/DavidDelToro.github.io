var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, world!';


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc !== 'images/firefox.jpg') {
        myImage.setAttribute ('src','images/firefox.jpg');
    } else {
        myImage.setAttribute ('src','images/index.jpg');
    }
}


//var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');



function setUserName(myName, numberofname) {

    numberofname++;
    localStorage.setItem('number', numberofname);
    localStorage.setItem('name'+numberofname, myName);
    myHeading.textContent = 'Welcome, ' + myName;
}
const para = document.querySelector('test');

para.addEventListener('click', updateName);

function updateName()
{
    var myName = prompt('Please enter your name.');
    var numberofnames = localStorage.getItem('number');
    if(numberofnames===null){numberofnames=0; setUserName(myName, numberofnames);}
    else {
        numberofnames = parseFloat(numberofnames);
        for (let i = 1; i <= numberofnames; i++) {
            if (localStorage.getItem('name' + i) === myName) {
                myHeading.textContent = 'Hi! I know you, ' + myName + '\n. Glad to see you again';
                break;
            }
            if (i === numberofnames) {
                setUserName(myName, numberofnames);
            }
        }
    }
}

myHeading.textContent = 'Mozilla is cool';




