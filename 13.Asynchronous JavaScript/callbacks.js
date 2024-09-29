//===============================> Callback Function <================

const fetchUser = (username, callback) => {
  console.log('Fetching ...');

  setTimeout(() => {
    console.log('Now we Have the user');
    callback(username);
  }, 2000);
};

fetchUser('Mirinda', (user) => {
  console.log(`hello ${user} here`);
});
