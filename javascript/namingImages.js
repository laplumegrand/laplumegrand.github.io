let number = 1;
function imageName(number) {
  let desc = "screenshot_chap"+number+".PNG"
  return desc;
}

let imgNumber = 3;
let desc = imageName(imgNumber);
console.log(desc);
