// Code your solutions in this file

const recipients = ["Guadalupe", "Ollie", "Aki"];
const copyOfRecipients = [...recipients];

function writeCards(copyOfRecipients, event) {
  for (let i = 0; i < copyOfRecipients.length; i++) {
    const recipients = ["Guadalupe", "Ollie", "Aki"];
    const copyOfRecipients = [...recipients];
    const messageForRecipients = [
      `Thank you, ${copyOfRecipients[i]}, for the wonderful ${event} gift!`,
      `Thank you, ${copyOfRecipients[1]}, for the wonderful ${event} gift!`,
      `Thank you, ${copyOfRecipients[2]}, for the wonderful ${event} gift!`,
    ];

    return messageForRecipients;
  }
}

//

function countDown(callCount) {
  // let callCount = true;
  {
    let i = 11;
    while (i > 0) {
      console.log(callCount[i]);
      i--;
      //numberCount = console.log(callCount[i]);
    }
    return callCount;
  }
}

countDown();
