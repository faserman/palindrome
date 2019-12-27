import React, { Component } from 'react';
import { PhraseProvider } from '../src/Context/phrase.js';
import Form from './Component/Form/index';
import './app.css';

class App extends Component {

  state = {
    isPalindrome: false,
    phrase: ''
  }

  checkPhrase = phrase => {
    const formattedPhrase = phrase.replace( /\s/g, '' ).toLowerCase();
    const reversedPhrase = formattedPhrase.split('').reverse().join('');
    if (phrase === reversedPhrase) {
      this.setState({ isPalindrome: true });
    } else {
      this.setState({ isPalindrome: false });
    }
  }

  setPhrase = phrase => {
    this.setState({ phrase }, () => this.checkPhrase(this.state.phrase));
  }

  render() {
    const { isPalindrome, phrase } = this.state;
    const phraseContext = {
      setPhrase: this.setPhrase,
      isPalindrome,
      phrase,
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
