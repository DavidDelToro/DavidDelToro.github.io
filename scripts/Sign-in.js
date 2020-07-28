




const para = document.querySelector('test');

para.addEventListener('click', updateName);

var myHeading = document.querySelector('h1');

myHeading.textContent = 'Mozilla is cool';


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

function setUserName(myName, numberofname) {

    numberofname++;
    localStorage.setItem('number', numberofname);
    localStorage.setItem('name'+numberofname, myName);
    myHeading.textContent = 'Welcome, ' + myName;
}