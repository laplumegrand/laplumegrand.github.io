let imgNumber = 3;
function imageName(number) {
  let desc = "screenshot_chap"+number+".PNG"
  return desc;
}

let desc = imageName(imgNumber);
console.log(desc);
