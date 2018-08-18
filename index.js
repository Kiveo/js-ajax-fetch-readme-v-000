const app = "I don't do much.";

const token = '3e14e3d5d25c1bb5b3db2ab7c0067e401064625b';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));