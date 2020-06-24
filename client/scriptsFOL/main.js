//--------data
const nameOutput = document.querySelector('#name-output');
const messageOutput = document.querySelector('#message-output');



//--------forms
const getForm = document.querySelector('#get-form');
const postForm = document.querySelector('#post-form');



//---form inputs
const postNameInput = document.querySelector('#post-name-input');
const postMessageInput = document.querySelector('#post-message-input');


postForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const postNameValue = postNameInput.value;
    const postMessageValue = postMessageInput.value;

    fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: postNameValue,
            message: postMessageValue
        })
    }).then( res =>{
        return res.json();
    }).then( data =>{
        console.log(data);

        nameOutput.textContent = data.name;
        messageOutput.textContent = data.message;
    }).catch( err =>{
        console.log(err);
    })
});

getForm.addEventListener('submit', ()=>{
    fetch('/api').then(res =>{
        return res.json();
    }).then(data =>{
        console.log(data);
    }).catch( err =>{
        console.log(err);
    })
})