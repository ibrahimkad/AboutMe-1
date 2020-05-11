'use strict'

// intro for user info
var userName = prompt('What\'s your name? ');
alert('welcome to my web page ' + userName);
console.log('your username is ' + userName);

document.getElementById("userName").innerHTML = 'welcome to my web page ' + userName;

// first question 

var movie = prompt('Do you think I like movies? ');

switch (movie.toLowerCase()) {
    case 'yes':
        alert('yes I like to watch a lot of movies');
        console.log('good answer');
        break;

    case 'no':
        alert('Wrong answer because I do like movies');
        console.log('wrong answer');
        break;
}

// second question 

var age = prompt('Do you think I older than 22? ');


switch (age.toLowerCase()) {
    case 'yes':
        alert('bad answer, I\'m not older than 22');
        console.log('wrong answer');
        break;
    case 'no':
        alert('good answer, I\'m younger than 22');
        console.log('good answer');
        break;
}

//  third question 

var place = prompt('do you think I live in Amman?');

switch (place.toLowerCase()) {
    case 'yes':
        alert('yes I live in Amman');
        console.log('good answer');
        break;
    case 'no':
        alert('bad answer, I do live in Amman');
        console.log('wrong answer');
        break;

}

// fourth question 

var cat = prompt('Do you think I love cats?')

switch (cat.toLowerCase()) {
    case 'yes':
        alert('yess I love cats so much');
        console.log('good answer');
        break;
    case 'no':
        alert('wrong answer, I like cats a lot');
        console.log('wrong answer');
        break;
}

// sixth question

var survey = prompt('Did you enjoy with the questions?');

switch (survey.toLowerCase()) {
    case 'yes':
        alert('Thank you, I will ask you more next time');
        break;
    case 'no':
        alert('well that\'s too bad I will ask you less questions next time');
        break;
}
// end of the questions

alert('good job ' + userName + ' you did very well Thank you');




