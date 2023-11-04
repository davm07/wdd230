const timeStampField = document.querySelector("#timestamp");

const date = new Date();
const timeStampFormatted = date.toLocaleString();
console.log(timeStampFormatted);

timeStampField.value = timeStampFormatted;