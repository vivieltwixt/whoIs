import { useState } from 'react';
import Form from '@/pages/components/Form';
import Data from '@/pages/components/Data';
import axios from 'axios';

export default function WhoIs() {
  const BACKEND_URL = process.env.BACKEND_URL
  const BACKEND_PORT = process.env.BACKEND_PORT
  const [basicOutput, setBasicOutput] = useState({
    createdDate: "",
    updatedDate: "",
    expiresDate: "",
    registrarName: "",
    rawText: ""
  });
  const [fullOutput, setFullOutput] = useState([""]);

  function handleClick(inputText: string){
      axios.get('http://{$BACKEND_URL}:{$BACKEND_PORT}/whoisdata', { params: { domainOrIP: inputText } })
         .then((response) => {
            setBasicOutput({
                 createdDate: response.data.WhoisRecord.createdDate || " ",
                 updatedDate: response.data.WhoisRecord.updatedDate || " ",
                 expiresDate: response.data.WhoisRecord.expiresDate || " ",
                 registrarName: response.data.WhoisRecord.registrarName || " ",
                 rawText: response.data.WhoisRecord.rawText || " "
            });
            setFullOutput(response.data);
          })
         .catch((err) => {
            console.log(err);
         });
  }

  return (
    <>
    <div className="pageTitle">
      <h1> Who Is? </h1>
        <div>
        <p className='pageDescription'>Input the IP Address or domain name of interest to get more information.</p>
        </div>
    </div>
    <Form handleClick = {handleClick}/>
    <Data basicOutput = {basicOutput} fullOutput = {fullOutput}/>
    </>
  );
}



