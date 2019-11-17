// VERSION 1

// 1.
// Write a function that:
// - Logs to the console numbers 1 to 100.
// - However, if the number is a multiple of 3 it should log to the console "This is a multiple of 3"
// - If it's a multiple of 5 it should log "This is a multiple of 5"
// - If it's a multiple of both 3 and 5 it should log "Jackpot!"
// - Otherwise, it should just log the number
// Hint: use the modulo operator (%) to figure out if it's a multiple of 3/5. Make sure the remainder is 0, in order to pass the condition.
// Hint: the order of conditional statements is important!

function multipleOfSomething(){
    for(let i = 1; i <=15; i++){
        if(i % 15 === 0){
         console.log('Jackpot!!!')
        }else if(i % 5 === 0){
            console.log('This is a multiple of 5');
        }else if(i % 3 === 0){
            console.log('Multiple of 3')
        }else{
            console.log(i);
        }
    }
}
multipleOfSomething();


// 2.
// Using JavaScript only (adding HTML to index.html is NOT allowed), write a function that:
// - Creates a button element (with text "click me!")
// - Creates an empty image element and add it to the document.
// - Inserts an image URL into the <img> tag, when the button is clicked
// - Removes the button after the click
// - Use the following image URL: https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.png


function addImg(url){
    const newButton = document.createElement('button');
    document.body.appendChild(newButton);
    newButton.innerText = 'Click ME!!!'
    newButton.addEventListener('click', function(){
        const newImg = document.createElement('img');
        document.body.appendChild(newImg);
        newImg.setAttribute('src', url);
        document.body.removeChild(newButton);
    })
}

//this img link below not working, I tested it with another url and it worked just fine.
addImg('https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.png')
addImg('https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg')


// 3.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Use the following API: https://randomuser.me/api?results=3
// - Parse the response and then display the "first" and "last" names of the first three users within the DOM (inside an unordered list)

function fetchData(url){
    fetch(url)
    .then(function(res){
        return res.json();
    }).then(function(json){
        const unLi = document.createElement('ul');
        document.body.appendChild(unLi);
        json.results.forEach(function(result){
          const li = document.createElement('li');
          unLi.appendChild(li);
          li.textContent = `${result.name.first} ${result.name.last}`;
        });
    }).catch(function(err){
        return `There has been an error ${err}`;
    })
}
fetchData('https://randomuser.me/api?results=3');
