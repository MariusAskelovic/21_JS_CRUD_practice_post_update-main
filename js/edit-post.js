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
els.form.addEventListener('submit', updateFormHandler);
function updateFormHandler(event) {
  event.preventDefault();
  console.log('pateikiama forma');

  const updatedPostData = {
    title: els.title.value.trim(),
    author: els.author.value.trim(),
    date: els.date.value,
    body: els.body.value.trim(),
    tags: els.tags.value.split(',').map((tag) => tag.trim()),
  };
  console.log('updatedPostData ===', updatedPostData);
  sendPatchFetch(updatedPostData);
}

// pateikiant forma surinkti inputus i objekta

// siusti 'patch' metodu atnaujinimus
function sendPatchFetch(updatedPostObj) {
  console.log('sendPatchFetch ran ', updatedPostObj);
  const updPostInJson = JSON.stringify(updatedPostObj);
  fetch(`${url}/${postId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: updPostInJson,
  })
    .then((resp) => resp.json())
    .then((ats) => {
      console.log('ats === ', ats);
      if (ats.id) {
        // pavyko
        if (confirm('irasas atnaujintas, eiti i home page?')) {
          window.location.href = 'index.html';
        }
      } else {
        console.log('nepavyko');
      }
    })
    .catch(console.warn);
}
