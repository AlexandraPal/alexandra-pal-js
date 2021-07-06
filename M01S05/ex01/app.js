console.log(
  `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()} Am ajuns la Pixellab.`,
);

const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();
const milliseconds = new Date().getMilliseconds();
const message = `${hours}:${minutes}:${seconds}:${milliseconds}, am ajuns la Pixellab.`;

console.log(message);

function getTime() {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const milliseconds = currentDate.getMilliseconds();

  return `${hours}:${minutes}:${seconds}:${milliseconds}, am ajuns la Pixellab`;
}

const exactTime = getTime();
console.log(exactTime);

// bonus
setInterval(function () {
  console.log(getTime());
}, 1000);
