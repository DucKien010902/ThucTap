import React, { useContext, useState, useRef, useEffect } from 'react';
import { ChatHistoryContext, MessageHistoryContext } from './context';
import PillSelector from './PillSelector';

function ChatWindow({ file }) {
  const { queryHistory, responseHistory } = useContext(ChatHistoryContext);
  const { setQueryHistory, setResponseHistory } = useContext(
    MessageHistoryContext
  );

  const [userInput, setUserInput] = useState('');
  const [activeOptionIndex, setActiveOptionIndex] = useState(null);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [queryHistory, responseHistory]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      console.warn('File is missing. Skipping for now.');
    }

    try {
      const chatOutput = 'Hello, can i help you ?';
      setQueryHistory((prev) => [...prev, userInput]);
      setResponseHistory((prev) => [...prev, chatOutput]);
      setUserInput('');
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setQueryHistory([]);
    setResponseHistory([]);
    setUserInput('');
    setActiveOptionIndex(null);
  };

  const options = [
    'Identify top trends in the tech industry relevant to gen ai',
    'Find emerging technologies and their potential impact on job opportunities',
    'Summarize my resume',
    'Create a career path visualization based on my skills and interests from my resume',
    'GenAI Jobs at Microsoft',
    'Job Search GenAI jobs in India.',
    'Analyze my resume and suggest a suitable job role and search for relevant job listings',
    'Generate a cover letter for my resume.',
  ];

  const icons = ['🔍', '🌐', '📝', '📈', '💼', '🌟', '✉️', '🧠'];

  const handleSelect = (index) => {
    setActiveOptionIndex(index);
    setUserInput(options[index]);
  };

  return (
    <div className="chat-window">
      <h1 style={{ marginTop: '10px', marginBottom: '0px', fontSize: '40px' }}>
        GenAI Career Assistant - 👨‍💼
      </h1>
      <p style={{ marginTop: '0px', marginBottom: '20px' }}>
        <a
          href="https://www.linkedin.com/in/aman-varyani-885725181/"
          style={{ color: 'blue', textDecoration: 'none' }}
        >
          [Connect with me on LinkedIn]
        </a>
      </p>
      <div className="chat-history">
        {queryHistory.map((query, index) => (
          <div key={index} className="chat-message">
            <p className="chat-query">
              <span className="user-icon">👤</span> {query}
            </p>
            <p className="chat-response">
              <span className="ai-icon">🤖</span> {responseHistory[index]}
            </p>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="  Enter your query..."
          className="input"
        />
        <button type="submit" className="button">
          Send
        </button>
        <button
          onClick={handleClear}
          className="button"
          id="clear"
          style={{ backgroundColor: 'red' }}
        >
          Clear
        </button>
      </form>
      <PillSelector
        options={options}
        selectedIndex={activeOptionIndex}
        setSelectedIndex={setActiveOptionIndex}
        icons={icons}
        onSelect={handleSelect}
      />
    </div>
  );
}

export default ChatWindow;
