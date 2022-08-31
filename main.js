// REFERENCES TO THE DOM
const messageBtn = document.querySelector('#message-btn');
const messageIn = document.querySelector('.message-In');
const messageOut = document.querySelector('#message-Out');

messageBtn.addEventListener('click', () => {
    let content = messageIn.value;
    if(content === ''){
        alert('Please type a valid message')
    }
    else{
        messageOut.innerHTML = content;
    }
})
