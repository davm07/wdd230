const timeStampField = document.querySelector("#timestamp");

const date = new Date();
const timeStampFormatted = date.toLocaleString();

timeStampField.value = timeStampFormatted;