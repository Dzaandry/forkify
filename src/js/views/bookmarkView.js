import PreviewView from './previewView.js';

class BookmarkView extends PreviewView {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';

  _generateMarkUp() {
    return this._data.map(this._generateMarkUpPreview).join('');
  }

  addHandlerRenderBookmarks(handler) {
    window.addEventListener('load', handler);
  }
}

export default new BookmarkView();
