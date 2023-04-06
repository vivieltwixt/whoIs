import { useState } from 'react';

export default function Form( {handleClick} : {handleClick : React.FunctionComponent<string>}) {
    const [inputText, setInputText] = useState("");
  
    return (
      <div className="form">
        <label>
          Domain name / IP Address: <input name="userInput" onChange={e => setInputText(e.target.value)} value={inputText}/>
        </label>
        <input type="submit" value="Submit" onClick={() => handleClick(inputText)}/>
        <input type="submit" value="Clear" onClick={() => setInputText("")}/>
      </div>
    );
  }