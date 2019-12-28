import React, { Component } from 'react';
import { PhraseProvider } from '../src/Context/phrase.js';
import Form from './Component/Form/index';
import './app.css';

class App extends Component {

  state = {
    isPalindrome: false,
    onDataProcessing: false,
    phrase: '',
  };

  checkPhrase = phrase => {
    const formattedPhrase = phrase.replace( /\s/g, '' ).toLowerCase();
    const reversedPhrase = formattedPhrase.split('').reverse().join('');
    if (formattedPhrase === reversedPhrase) {
      this.setState({
        isPalindrome: true
      });
    } else {
      this.setState({
        isPalindrome: false
      });
    }
  };

  setPhrase = phrase => {
    if (phrase.length === 0) {
      this.setState({
        onDataProcessing: false,
        phrase: '',
      });
    } else if (this.state.phrase !== phrase) {
      this.setState({
        phrase: phrase,
        onDataProcessing: true,
      }, () => this.checkPhrase(this.state.phrase));
    };
  };

  render() {
    const { phrase, isPalindrome, onDataProcessing } = this.state;
    const phraseContext = {
      phrase,
      onDataProcessing,
      isPalindrome,
      setPhrase: this.setPhrase
    };

    return (
      <div className="App">
        <PhraseProvider value = { phraseContext }>
          <Form />
        </PhraseProvider>
      </div>
    );
  }
}

export default App;
