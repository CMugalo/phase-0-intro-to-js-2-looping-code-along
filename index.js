// Code your solutions in this file

const recipientNames = ["Guadalupe", "Ollie", "Aki"];

function writeCards(stringArray, eventName) {
  const messagesArray = [];

  for (let i = 0; i < stringArray.length; i++) {
    messagesArray.push(
      `Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`
    );
  }
  return messagesArray;
}

writeCards(recipientNames, "surprise");

function countDown(posInteger) {
  let i = posInteger;
  while (i >= 0) {
    console.log(i);
    i--;
  }
  return posInteger;
}
countDown(3);
