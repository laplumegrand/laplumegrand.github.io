let assignment1 = {
  num: 1,
  title: "Assignment 1",
  descr: "Some text, then a hyperlink about GIS info on Baton Rouge.",
  img: "img/br night.PNG",
  link: "https://data-ebrgis.opendata.arcgis.com",
  updated: false
}

let assignment2 = {
  num: 2,
  title: "Assignment 2",
  descr: "Created a web app that gives a virtual tour of a few unique spots and sites in Chicago.",
  img: "img\screenshot_chap1",
  link: "https://www.arcgis.com/apps/MapTour/index.html?appid=d7722c39ff9044618704da684e8e06cb",
  updated: true
}

let assignments = [
  assignment1,
  assignment2
]

for (i=0; i< assignments.length; i++) {
  console.log(array[0]);
}

for (i=0; i< assignments.length; i++){
  if (assignments[i].updated === true) {
    console.log("It is "+ assignments[i].updated +" that this assignment's post has been updated.");
  }
  else {
    console.log("This assignmnet's post has not been fully updated.");
  }
}

for (var i = 0; i < assignments.length; i++) {
 if (assignments[i].num === 1) {
   console.log("This is the url of the first assignment done: " + assignments[i].link);
 }
 else {
   console.log("This is the url of the second assignment done: " + assignments[i].link);
 }
}
