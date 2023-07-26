import { crEl } from './helper/crEl.js';
import { url } from './helper/config.js';

console.log('single-post.js file was loaded');

const contentEl = document.getElementById('content');
const delBtn = document.getElementById('delBtn');

// gauti pId is url parametru

const params = new URLSearchParams(window.location.search);
const postId = params.get('pId');
console.log('postId ===', postId);

// parsiusti to posto objekta

function getPostById() {
  fetch(`${url}/${postId}`)
    .then((resp) => resp.json())
    .then((postObj) => {
      console.log('postObj ===', postObj);
      renderPost(postObj);
    })
    .catch(console.warn);
}
getPostById();

function renderPost(pObj) {
  console.log('renderPost ran ', pObj);
  const title = crEl('h1', { class: 'main-title' }, pObj.title);
  const pEl = crEl('p', { class: 'text' }, pObj.body);
  const tagTitle = crEl('h2', { class: 'tag-title' }, 'Tags:');

  const ulEl = crEl('ul', { class: 'unlisted flex tags' });
  pObj.tags.forEach((tagString) => {
    const liEl = crEl('li', { class: 'tag' }, tagString);
    ulEl.append(liEl);
  });
  const pLikes = crEl('p', { class: 'author' }, `Author: ${pObj.author}`);
  contentEl.append(title, pEl, tagTitle, ulEl, pLikes);
}

delBtn.addEventListener('click', () => {
  console.log('delete', postId);
  if (confirm('ar tikrai istrinti?')) {
    deletePostFetch(postId);
  }
});

function deletePostFetch(idToDelete) {
  console.log('deletePostFetch === ', idToDelete);
  fetch(`${url}/${idToDelete}`, {
    method: 'DELETE',
  })
    .then((resp) => {
      if (resp.ok === true) {
        // pavyko
        // nunaviguoti i index.html
        window.location.href = 'index.html';
      } else {
        // nepavyko
      }
    })
    .catch(console.warn);
}
