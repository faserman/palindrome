import React, { useContext, useState } from 'react';
import { PhraseContext } from '../../Context/phrase.js';
import './index.css';

const Form = () => {

  const { setPhrase, isPalindrome, phrase } = useContext(PhraseContext);
  const [onDataProcessing, setOnDataProcessing] = useState(false);
  const [err, setErr] = useState(false);

  const dataProcessing = () => {
    if (phrase.length === 0) {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 1500);
    } else {
      setOnDataProcessing(true)
      setPhrase(phrase);
      setTimeout(() => {
        setPhrase('');
        setOnDataProcessing(false);
      }, 1500)
    }
  };

  const resultStyle = isPalindrome ? 'is-palindrome-resp' : 'is-not-palindrome-resp';
  const resultText = isPalindrome ? 'is palindrome' : 'is not palindrome';
  const response = err ? (
    <div className="err">
      <p className="err-resp">please enter a phrase at the beginning</p>
    </div>
  ) : (onDataProcessing ? (
        <div className={ resultStyle }>
          <p className="resp">{ resultText }</p>
        </div>
      ) : (
        <div
          className="form-btn"
          onClick={ dataProcessing }
        >
          <p className="text-btn">check phrase</p>
        </div>)
  )

  const keyPress = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      dataProcessing();
    }
  };

  return(
    <div className="bgr-form">
      <div className="form-box">
        <textarea
          className="textarea"
          type='text'
          placeholder="please enter a phrase"
          value={ phrase }
          onKeyPress={ keyPress }
          onChange={ e => setPhrase(e.target.value) }
        />
        { response }
      </div>
    </div>
    
  );
}

export default Form;
