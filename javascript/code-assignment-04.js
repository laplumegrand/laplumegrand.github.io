let projectId = 1
let projectTitle = "Assignment 1"
let projectDesc = "Some text, then a hyperlink about GIS info on Baton Rouge."
let projectIMG = "?"
let projectURL = "https://data-ebrgis.opendata.arcgis.com"

let projectArray = [
  projectId,
  projectTitle,
  projectDesc,
  projectIMG,
  projectURL
]


let projectObject = {
  id: projectId,
  title: projectTitle,
  desc: projectDesc,
  img: projectIMG,
  url: projectURL
}

console.log(projectObject.URL);
console.log(projectArray[3]);
