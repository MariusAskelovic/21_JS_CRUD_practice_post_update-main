import { crEl } from './helper/crEl.js';
import { url } from './helper/config.js';

console.log('app.js file was loaded');

const postContainer = document.getElementById('container');
const ulEl = document.getElementById('ulEl');
const sortTitle = document.getElementById('sortTitleBtn');
const sortAuthor = document.getElementById('sortAuthorBtn');
const sortDate = document.getElementById('sortDateBtn');

let mainPostArr = [];

function getPosts() {
  fetch(url)
    .then((resp) => resp.json())
    .then((obj) => {
      console.log('obj === ', obj);
      mainPostArr = obj;
      render();
    })
    .catch(console.warn);
}
getPosts();

function makeOnePost(postObj) {
  const liLink = crEl('a', { href: `single-post.html?${postObj.id}` });
  const liEl = crEl('li', { id: 'liEl' });
  const oneLi = `${postObj.title.slice(0, 10)} - ${postObj.author} | ${
    postObj.date
  }`;
  liLink.append(oneLi);
  liEl.append(liLink);
  return liEl;
}

function render() {
  ulEl.innerHTML = '';
  const newPostsArr = mainPostArr.map((pObj) => makeOnePost(pObj));
  console.log('newPostsArr ===', newPostsArr);
  ulEl.append(...newPostsArr);
}

function sortPostsByAuthor() {
  mainPostArr.sort((aObj, bObj) => aObj.author > bObj.author);
  render();
}
sortAuthor.addEventListener('click', sortPostsByAuthor);
function sortPostsByTitle() {
  mainPostArr.sort((aObj, bObj) => aObj.title > bObj.title);
  render();
}
sortTitle.addEventListener('click', sortPostsByTitle);
function sortPostsByDate() {
  mainPostArr.sort((aObj, bObj) => aObj.date > bObj.date);
  render();
}
sortDate.addEventListener('click', sortPostsByDate);
