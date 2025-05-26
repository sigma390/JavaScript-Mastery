function A1(user, callback) {
  console.log('Inside Functon A1');
  setTimeout(() => {
    console.log('Now we have user');
    callback(user);
  }, 2000);
}

function A2(user, callback) {
  console.log('Inside Functon A2');
  setTimeout(() => {
    console.log(`Now we have photos of ${user.username}`);
    callback(user.photos);
  }, 2000);
}

function A3(user, callback) {
  console.log('This is function A3');

  setTimeout(() => {
    console.log(`Now we have photos of ${user.mirinda}`);
    callback(user.photos[0].details);
  }, 2000);
}

const user = {
  username: 'Mirinda',
  photos: [
    {
      id: 1,
      description: 'This is 1st Photo',
      details: 'This is 1st Photo Details',
    },
    {
      id: 2,
      description: 'This is 2nd Photo',
      details: 'This is 2nd Photo Details',
    },
  ],
};

// Example of using the callback functions in sequence
A1(user, (userData) => {
  console.log(`Got user: ${userData.username}`);
  A2(userData, (photos) => {
    console.log(`Got ${photos.length} photos`);
    A3(userData, (photoDetails) => {
      console.log(`Got photo details: ${photoDetails}`);
      A4(userData, (username) => {
        console.log(`Finished processing for ${username}`);
      });
    });
  });
});

function A4(user, callback) {
  console.log('Inside Function A4');
  setTimeout(() => {
    console.log(`Processing user ${user.username}`);
    callback(user.username);
  }, 2000);
}
