import { crEl } from './helper/crEl.js';
import { url } from './helper/config.js';

console.log('app.js file was loaded');

const postContainer = document.getElementById('container');

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
  const ulEl = crEl('ul', { id: 'ulEl' });
  const title = crEl('li', { class: 'title' }, postObj.title);
  const author = crEl('li', { class: 'author' }, postObj.author);
  const date = crEl('li', { class: 'date' }, postObj.date);
  ulEl.append(title, author, date);
  return ulEl;
}

function render() {
  const newPostsArr = mainPostArr.map((pObj) => makeOnePost(pObj));
  console.log('newPostsArr ===', newPostsArr);
  postContainer.append(...newPostsArr);
}
