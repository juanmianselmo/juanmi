// Original author: harikrishnan @RobotWizard
// https://codepen.io/RobotWizard/pen/rRVKVa

const SPEED = 2;

const juanmi = document.getElementById("juanmi");
const juanmiWidth = juanmi.clientWidth;
const juanmiHeight = juanmi.clientHeight;

let dirX = Math.random() < 0.5 ? 1 : -1;
let dirY = Math.random() < 0.5 ? 1 : -1;

let juanmiX = Math.random() * (document.body.clientWidth - juanmiWidth);
let juanmiY = Math.random() * (document.body.clientHeight - juanmiHeight);

function animate() {
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  if (juanmiY + juanmiHeight >= screenHeight || juanmiY < 0) {
    dirY *= -1;
  }
  if (juanmiX + juanmiWidth >= screenWidth || juanmiX < 0) {
    dirX *= -1;
  }
  juanmiX += dirX * SPEED;
  juanmiY += dirY * SPEED;
  juanmi.style.left = juanmiX + "px";
  juanmi.style.top = juanmiY + "px";
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
