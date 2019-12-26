import React, { Component } from 'react';
import { PhraseProvider } from '../src/Context/phrase.js';
import Form from './Component/Form/index';
import './app.css';

class App extends Component {

  state = {
    result: undefined,
    phrase: undefined,

    responseStyle: undefined,
  }

  gettingString = phrase => {
    if ( phrase.length > 0 ) {
      this.setState({
        phrase: phrase
      });
      const string = phrase.replace( /\s/g, '' ).toLowerCase();
      this.stringCheck(string);
      this.clearState();
    } else {
      this.setState({
        phrase: undefined,
        result: <p className="err-resp">please enter a phrase at the beginning</p>,
        responseStyle: "err",
      });
      this.clearState();
    }
  };

  stringCheck = string => {
    if (string === string.split('').reverse().join('')) {
      this.setState ({
        result: <p className="resp">is palindrome</p>,
        responseStyle: "is-palindrome-resp",
      })
    } else {
      this.setState ({
        result: <p className="resp">is not palindrome</p>,
        responseStyle: "is-not-palindrome-resp",
      })
    }
  };

  clearState = () => {
    setTimeout(() => {
      this.setState({
        result: undefined,
        phrase: undefined,
        responseStyle: undefined,
      })
    }, 3000);
  };

  render() {
    const { phrase, result, responseStyle } = this.state;
    const phraseContext = {
      phrase,
      result,
      responseStyle,
      method: this.gettingString
    }
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
