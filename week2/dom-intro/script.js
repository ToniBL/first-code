// 1. grab element by id

var mainHeading = document.getElementById("main-title");
console.log('mainHeading: ', mainHeading);

// 2. querySelector target HTML element on basis of any css selector like tag, class, id, selector specific # or . musst be added in query
// it will return first match of tag (e.a. first div of possibly many), 

var elem = document.querySelector('.first-section')
console.log("elem: ", elem);

// 3. querySecetorAll to grab more than one element 
// returns array-like object [even if there is only one!], can be looped ect. 

