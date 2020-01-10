import React, { Component } from 'react';
import { PhraseProvider } from '../src/Context/phrase.js';
import Form from './Component/Form/index';
import './app.css';

class App extends Component {

  state = {
    isPalindrome: false,
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
        phrase: '',
      });
    } else if (this.state.phrase !== phrase) {
      this.setState({
        phrase: phrase,
      }, () => this.checkPhrase(this.state.phrase));
    };
  };

  render() {
    const { phrase, isPalindrome } = this.state;
    const phraseContext = {
      phrase,
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
