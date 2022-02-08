const ride = new Promise((resolve, reject) =>{ // executor: function that resolves a value or rejects (error)
    if(arrived){
        resolve('driver arrived'); // resolve: fulfills promise with passed value
    } else {
        reject('driver bailed'); // reject: operation failed
    }
});

ride
    .then(value => { // then: function that handles fulfillment
        console.log(value); // driver arrived
    })
    .catch(error =>{ // catch: handle rejection
        console.log(error); // driver bailed
    })
    .finally(() => { // if you just want to run some code no matter what you can use finally to handle both possibilities 
        console.log('all settled');
    });

/* ============================================================= */

let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

p.then((message) => {
    console.log('This is in the the ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
});

/* ============================================================= */

// Callback Function

const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft){
        errorCallback({
            name: 'User Left',
            message: ':('
        });
    } else if(userWatchingCatMeme){
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WeDevSimplified < Cat'
        });
    } else{
        callback('Thumbs up and Subscribe');
    }
}

watchTutorialCallback((message) =>{
    console.log('Success: ' + message);
}, (error) => {
    console.log(error.name + ' ' + error.message);
});

// Promises
function watchTutorialPromises(){
    return new Promise((resolve, reject) => {
        if (userLeft){
            reject({
                name: 'User Left',
                message: ':('
            });
        } else if(userWatchingCatMeme){
            reject({
                name: 'User Watching Cat Meme',
                message: 'WeDevSimplified < Cat'
            });
        } else{
            resolve('Thumbs up and Subscribe');
        }
    });
}

watchTutorialPromises().then((message) =>{
    console.log('Promises Success: ' + message);
}).catch((error) => {
    console.log('Promises ' + error.name + ' ' + error.message);
});

/* ============================================================= */

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
});

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
});

Promise.race([ // Ampliar race (retorna la primer promesa en cumplirse, creo (?))
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
});