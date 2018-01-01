const contentType = 'application/json; charset=UTF-8';
const DEPLOYED_API = 'http://localhost:3000/';

const getOptions = {
  method: 'GET',
  headers: {
    'Content-Type': contentType
  }
};

let postOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': contentType
  }
};

// const putOptions = {
//   method: 'put',
//   headers: {
//     'Accept': 'application/json, text/plain, */*',
//     'Content-Type': contentType,
//     'x-auth-token': token
//   }
// };

// const deleteOptions = {
//   method: 'delete',
//   headers: {
//     'Accept': 'application/json, text/plain, */*',
//     'Content-Type': contentType,
//     'x-auth-token': token
//   }
// };

module.exports = {
  PostUser: (profile, cb) => {
    let route = DEPLOYED_API + 'api/user';
    let options = postOptions;
    options.body = JSON.stringify(profile);
    return fetch(route, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      cb(null, data);
    })
    .catch((error) => {
      console.log('Error Caught!', error);
      cb(error, null);
    });
  }
}