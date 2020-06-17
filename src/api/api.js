export const getStoreList = (page) => {
  const url = '/mockData/' + page + '.json';
  return fetch(url)
    .then(response => response.json())
    .then(result => result)
    .catch(error => ({ status: 'error', message: 'Failed!' }));
}
