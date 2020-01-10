import React, { useContext } from 'react';
import { PhraseContext } from '../../Context/phrase.js';
import './index.css';

const Form = () => {

  const { setPhrase, isPalindrome, phrase } = useContext(PhraseContext);

  const resultStyle = isPalindrome ? 'is-palindrome-resp' : 'is-not-palindrome-resp';
  const resultText = isPalindrome ? 'is palindrome' : 'is not palindrome';
  const response = (phrase.trim()) ? (
    <div className={ resultStyle }>
      <p className="resp">{ resultText }</p>
    </div>
  ) : (
    null
  );

  return(
    <div className="bgr-form">
      <div className="form-box">
        <textarea
          className="textarea"
          type='text'
          placeholder="please enter a phrase"
          value={ phrase }
          onChange={ e => setPhrase(e.target.value) }
        />
        { response }
      </div>
    </div>
    
  );
}

export default Form;
