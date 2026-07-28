//======================> Callbacks <=========================
// function passed to another function as Argument just to call it later as per convenience



function A(callbkFxn) { //can be A(callback)
    console.log("The callback function will be executed After 3000 ms")

    //case 1
    setTimeout(callbkFxn, 3000) //can be setTimeout(callback,3000)
    //case 2
    // setTimeout(callbkFxn(), 3000); // => setTimeout(undefined, 3000)  as callbkFxn return undefined and the SetTimout Always expects a function 


}

const callbkFxn = () => {
    console.log("Hey i am callback")
}

A(callbkFxn) // jo pass krte ho wahi callback function ka name hona chahie 



//================> call back hell <============

function login(callback) {
    setTimeout(() => {
        console.log("✅ Login Successful");
        callback();
    }, 1000);
}

function getProfile(callback) {
    setTimeout(() => {
        console.log("✅ Profile Received");
        callback();
    }, 1000);
}

function getPosts(callback) {
    setTimeout(() => {
        console.log("✅ Posts Received");
        callback();
    }, 1000);
}

function getComments(callback) {
    setTimeout(() => {
        console.log("✅ Comments Received");
        callback();
    }, 1000);
}

login(() => {
    getProfile(() => {
        getPosts(() => {
            getComments(() => {
                console.log("🎉 Dashboard Ready");
            });
        });
    });
});