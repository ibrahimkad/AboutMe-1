'use strict';

var correctAnswer = 0;

// intro for user info
var userName = prompt('What\'s your name? ');
alert('welcome to my web page ' + userName);
console.log('your username is ' + userName);

document.getElementById("userName").innerHTML = 'welcome  ' + userName;

// first question 

var movie = prompt('Do you think I like movies? ');

switch (movie.toLowerCase()) {
    case 'yes':
        alert('yes I like to watch a lot of movies');
        console.log('good answer');
        correctAnswer++;
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
        correctAnswer++;
        break;
}

//  third question 

var place = prompt('do you think I live in Amman?');

switch (place.toLowerCase()) {
    case 'yes':
        alert('yes I live in Amman');
        console.log('good answer');
        correctAnswer++;
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
        correctAnswer++;
        break;
    case 'no':
        alert('wrong answer, I like cats a lot');
        console.log('wrong answer');
        break;
}

// fivth question

var coffee = prompt('Did you think I like coffee?');

switch (coffee.toLowerCase()) {
    case 'yes':
        alert('wrong answer I don\'t like it ');
        break;
    case 'no':
        alert('correct answer');
        correctAnswer++;
        break;
}
//  sexth question 

var abdAge = 20;

for (var i = 0; i <= 3; i++) {
    var myAge = prompt('can you guess my age?'); 

    if (myAge > abdAge) {
        alert('too high');
    }
    else if (myAge < abdAge) {
        alert('too low');
    }
    else if (myAge == abdAge) {
        alert('correct');
        correctAnswer++;
        break;
    }
}


//  array and question  7th question

// var food = ['pizza', 'chicken', 'shawrma', 'french fries', 'tacos'];

// for (var i = 0; i < 6; i++) {
//     var favfood = prompt('what do you think are my favourite food?');

//     if (favfood == food[0] || favfood == food[1] || favfood == food[2] || favfood == food[3] || favfood == food[4] || favfood == food[5]) {
//         alert('good answer');
//         correctAnswer++;
//         break;
//     }
//     else if (food !== favfood) {
//         alert('wrong answer');
//     }
// }

// console.log(food.length);
// alert(food);


// array and question  7th question
var food = ['pizza', 'chicken', 'shawrma', 'french fries', 'tacos'];
var i = 0;
var answer = false;
while (i < 7) {
    var favfood = prompt('what do you think are my favourite food?');
    for ( var e=0; e<food.length; e++) {
        if(favfood == food[e]) {
            alert('correct answer');
            answer = true;
            break;
        }
        else {
            alert('try again');
            break;
        }
    }
    if(answer){
        break;
    }
    i++
}


//   result 
alert('you did answer ' + correctAnswer + ' questions correct, well done');


//  for loop statmente 
// var cats = 2;

// for (var i = 0; i <= 5; i++) {
//     var count = prompt('how many cats do I have ?');

//     if (count > cats) {
//         alert('too high value');
//     }
//     else if (count < cats) {
//         alert('too low value');
//     }
//     else if(count == cats){
//         alert('good answer');
//         correctAnswer++;
//         break;
//     }
// 
