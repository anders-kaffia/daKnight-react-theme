import axios from 'axios';

// just grabbing the repos for a user
function getContent() {
  return axios.get(`/wp-json/wp/v2/pages/`);
}

// grabbing the user profile
function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

function getPosts() {
  return axios.get(`/wp-json/wp/v2/posts/`);
}


// essentially promise.all - wait for both request to be back before returning
const helpers = {
  getAllContent: function () {
    return axios.all([getContent(), getPosts()])
      .then(function (arr) {
        return {
          pages: arr[0].data,
          posts: arr[1].data
        };
      });
  }
};

export default helpers;