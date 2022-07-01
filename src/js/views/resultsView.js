import PreviewView from './previewView.js';

class ResultsView extends PreviewView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';

  _generateMarkUp() {
    return this._data.map(this._generateMarkUpPreview).join('');
  }
}

export default new ResultsView();
