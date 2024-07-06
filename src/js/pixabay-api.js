export function getPicturesByQuery(query) {
  const key = '44808293-64f6d68c9109520376c76cf92';
  const url = `https://pixabay.com/api/?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
