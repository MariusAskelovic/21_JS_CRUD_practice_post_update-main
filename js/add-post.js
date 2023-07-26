import { url } from './helper/config.js';
console.log('add-post.js file was loaded');

// taikomes
const els = {
  form: document.forms[0],
  title: document.getElementById('title'),
  body: document.getElementById('body'),
  author: document.getElementById('author'),
  date: document.getElementById('date'),
  tags: document.getElementById('tags'),
};
console.log('els ===', els);

// uzdeti formai submit listeneri
els.form.addEventListener('submit', newPostHandler);

// formos apdorojimo funkcija
/**
 * Pagrindine formo apdorojimo funkcija
 * @param {SubmitEvent} event
 */
function newPostHandler(event) {
  // stabdom perkrovima
  event.preventDefault();
  console.log('submiting form');
  // paimti visus inputus is formos is sudeti i viena objekta
  const newPostObj = {
    title: els.title.value.trim(),
    author: els.author.value.trim(),
    date: els.date.value,
    body: els.body.value.trim(),
    tags: els.tags.value.split(',').map((tag) => tag.trim()),
  };
  // newPostObj.tags - turi buti masyvas
  console.log('newPostObj ===', newPostObj);
  sendNewPostFetch(newPostObj);
}

/* new post object
{
  "title": "Test Post",
  "body": "This is a test post.",
  "author": "John Doe",
  "tags": ["test", "example"],
  "date": "2022-04-03"
} 
*/

function sendNewPostFetch(newPostDataObj) {
  console.log('sendNewPostFetch fn ran ===', newPostDataObj);
  // verciam js objekta i json
  const newPostInJson = JSON.stringify(newPostDataObj);
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newPostInJson,
  })
    .then((resp) => resp.json())
    .then((postRezult) => {
      console.log('postRezult ===', postRezult);
      if (postRezult.id) {
        // jei gryzo id tai sukurtas irasas
        console.log('sekme');
        // naviguoti i index.html
        // window.location.href = 'index.html';
      } else {
        // kitu atveju klaida
        console.warn('kazkas nepavyko', postRezult);
      }
    })
    .catch(console.warn);
}
