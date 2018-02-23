let projectId = 1
let projectTitle = "Assignment 1"
let projectDesc = "Some text, then a hyperlink about GIS info on Baton Rouge."
let projectIMG = "img/screenshot_chap3"
let projectURL = "https://data-ebrgis.opendata.arcgis.com"
let projectBoolean = false

let projectArray = [
  projectId,
  projectTitle,
  projectDesc,
  projectIMG,
  projectURL,
  projectBoolean
]


let projectObject = {
  id: projectId,
  title: projectTitle,
  desc: projectDesc,
  img: projectIMG,
  url: projectURL,
  bool: projectBoolean
}

console.log(projectObject.url);
console.log(projectArray[3]);
