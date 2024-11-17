import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import {
  ChatHistoryContext,
  MessageHistoryContext,
} from './components/context';

function App() {
  const [file, setFile] = useState(null);
  const [serviceProvider, setServiceProvider] = useState('openai');
  const [queryHistory, setQueryHistory] = useState(['Hi there! 👋']);
  const [responseHistory, setResponseHistory] = useState([
    'Hello! How can I assist you today?',
  ]);

  return (
    <div className="app">
      <Sidebar
        serviceProvider={serviceProvider}
        setServiceProvider={setServiceProvider}
      />
      <ChatHistoryContext.Provider value={{ queryHistory, responseHistory }}>
        <MessageHistoryContext.Provider
          value={{ setQueryHistory, setResponseHistory }}
        >
          <ChatWindow file={file} />
        </MessageHistoryContext.Provider>
      </ChatHistoryContext.Provider>
    </div>
  );
}

export default App;
