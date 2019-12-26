import React, { useContext, useState } from 'react';
import { PhraseContext } from '../../Context/phrase.js';
import './index.css';

const Form = () => {

  const { method, result, responseStyle } = useContext(PhraseContext);
  const [phrase, setPhrase] = useState('');
  const [onDataProcessing, setOnDataProcessing] = useState(false);

  const dataProcessing = () => {
    setOnDataProcessing(true)
    method(phrase);
    setTimeout(() => {
      setPhrase('');
      setOnDataProcessing(false)
    }, 3000);
  };

  const response = onDataProcessing ? <div 
    className={ responseStyle }>
      { result }
    </div> : <div 
      className="form-btn"
      onClick={ dataProcessing }
      >
        <p className="text-btn">check phrase</p>
    </div>

  const keyPress = (e) => {
    if(e.key === 'Enter'){
      dataProcessing()
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
