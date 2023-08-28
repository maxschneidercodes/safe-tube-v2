function setLocalStorageItem(id, item) {
  localStorage.setItem(id, JSON.stringify(item));
}

function getLocalStorageItem(id) {
  return JSON.parse(localStorage.getItem(id));
}

module.exports = {
  setLocalStorageItem: setLocalStorageItem,
  getLocalStorageItem: getLocalStorageItem,
};
