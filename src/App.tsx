import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChatUIProvider, ChatViewComponent, ENV, SpacesUIProvider, lightChatTheme } from '@pushprotocol/uiweb';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      {/* <SpacesUIProvider spaceUI={new SpacesUI} theme={undefined} children={undefined}>
        
      </SpacesUIProvider> */}
      <ChatUIProvider env={ENV.PROD} theme={lightChatTheme}>
        <ChatViewComponent
          chatId="4ac5ab85c9c3d57adbdf2dba79357e56b2f9ef0256befe750d9f93af78d2ca68"
          limit={10}
        />
      </ChatUIProvider>
    </div>
  );
}

export default App;
