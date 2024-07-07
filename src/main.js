import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getPicturesByQuery } from './js/pixabay-api.js';
import { renderGalleryCard } from './js/render-functions.js';
import errorSvg from './img/error.svg';
import cautionSvg from './img/caution.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const preloader = document.querySelector('.loader-wrap');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  const query = form.elements.input.value.toLowerCase().trim();

  if (query === '') {
    iziToast.warning({
      title: 'Caution',
      titleColor: 'white',
      titleSize: '16px',
      message: 'Please, fill out the field!',
      messageColor: 'white',
      messageSize: '16px',
      position: 'topRight',
      backgroundColor: '#ffa000',
      iconUrl: cautionSvg,
      close: false,
      closeOnClick: true,
    });
    return;
  }

  preloader.style.display = 'flex';
  getPicturesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          titleColor: 'white',
          titleSize: '16px',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'white',
          messageSize: '16px',
          position: 'bottomRight',
          backgroundColor: '#ef4040',
          iconUrl: errorSvg,
          close: false,
          closeOnClick: true,
        });
      } else {
        gallery.innerHTML = renderGalleryCard(data.hits);
        lightbox.refresh();
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      form.reset();
      preloader.style.display = 'none';
    });
}
