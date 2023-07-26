import { url } from './helper/config.js';

console.log('edit-post.js file was loaded');

const els = {
  form: document.forms[0],
  title: document.getElementById('title'),
  body: document.getElementById('body'),
  author: document.getElementById('author'),
  date: document.getElementById('date'),
  tags: document.getElementById('tags'),
};

// gauti id parametra kurio post info reikia
const params = new URLSearchParams(window.location.search);
const postId = params.get('postId');
console.log('postId ===', postId);
// parsisiusti to posto objekta
function getSinglePost() {
  fetch(`${url}/${postId}`)
    .then((resp) => {
      return resp.json();
    })
    // isconsologinti gauta post objekta
    .then((postObj) => {
      //   console.log(postObj);
      postObjToInputs(postObj);
    })
    .catch(console.warn);
}
getSinglePost();

// paimti is objekto reiksmes ir supildyti formos inputus
function postObjToInputs(currentPostObj) {
  console.log('currentPostObj ===', currentPostObj);
  // paimti reiksmes is currentPostObj ir supildyti
  const { title, body, author, date, tags } = currentPostObj;

  // visus formos inputus
  els.title.value = title;
  els.author.value = author;
  els.body.value = body;
  els.date.value = date;
  els.tags.value = tags.join(', ');
}

// stebeti formos pateikima
function updateFormHandler() {}

// pateikiant forma surinkti inputus i objekta

// siusti 'patch' metodu atnaujinimus
function sendPatchFetch(updatedPostObj) {}
