import React, { useContext, useState } from 'react';
import { PhraseContext } from '../../Context/phrase.js';
import './index.css';

const Form = () => {

  const { setPhrase, isPalindrome, phrase } = useContext(PhraseContext);
  const [onDataProcessing, setOnDataProcessing] = useState(false);

  const dataProcessing = () => {
    setOnDataProcessing(true)
    setPhrase(phrase);
    setTimeout(() => {
      setPhrase('');
      setOnDataProcessing(false)
    }, 3000);
  };

  const resultStyle = isPalindrome ? 'is-palindrome-resp' : 'is-not-palindrome-resp';
  const resultText = isPalindrome ? 'is palindrome' : 'is not palindrome';
  const response = onDataProcessing ? (
    <div className={ resultStyle }>
      <p className="resp">{resultText}</p>
    </div>
  ) : (
    <div 
      className="form-btn"
      onClick={ dataProcessing }
    >
      <p className="text-btn">check phrase</p>
    </div>
  );

  const keyPress = (e) => {
    if (e.key === 'Enter'){
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
