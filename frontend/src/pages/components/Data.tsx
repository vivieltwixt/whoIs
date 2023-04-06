import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type BasicOutputProps = {
  createdDate ?: string,
  updatedDate ?: string,
  expiresDate ?: string,
  registrarName ?: string,
  rawText ?: string
}

export default function Data( props: { basicOutput : BasicOutputProps, fullOutput: string}) {
    return (
      <div className="data">
      <Tabs>
        <TabList>
          <Tab>Basic</Tab>
          <Tab>Full</Tab>
        </TabList>
        <TabPanel>
            <pre> Created Date: { props.basicOutput.createdDate || "" } </pre>
            <pre> Updated Date: { props.basicOutput.updatedDate || "" } </pre>
            <pre> Expires Date: { props.basicOutput.expiresDate  || ""} </pre>
            <pre> Registrar Name: { props.basicOutput.registrarName  || ""} </pre>
            <pre> More Info: { props.basicOutput.rawText } </pre>
        </TabPanel>
        <TabPanel>
          <pre>
            {JSON.stringify(props.fullOutput, null, 2)}
          </pre>
        </TabPanel>
      </Tabs>
      </div>
    );
  };
  