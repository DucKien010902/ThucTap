import React, { useState } from 'react';

function ServiceProviderSelect() {
  const [serviceProvider, setServiceProvider] = useState('openai');
  const [openAIKey, setOpenAIKey] = useState('');
  const [groqKeyVisible, setGroqKeyVisible] = useState(false);
  const [groqKey, setGroqKey] = useState('');

  const handleServiceProviderChange = (e) => {
    setServiceProvider(e.target.value);
  };

  const handleGroqKeyVisibility = () => {
    setGroqKeyVisible(!groqKeyVisible);
  };

  return (
    <div className="service-provider-container">
      <div className="sidebar-provide">
        <div className="select-container">
          <label htmlFor="service-provider">Service Provider</label>
          <select
            id="service-provider"
            value={serviceProvider}
            onChange={handleServiceProviderChange}
            className="service-provider-select"
          >
            <option value="openai">OpenAI</option>
            <option value="groq">Groq</option>
          </select>
        </div>

        {serviceProvider === 'openai' && (
          <div className="openai-config">
            <label htmlFor="api-key-openai">OpenAI API Key</label>
            <input
              type="password"
              id="api-key-openai"
              value={openAIKey}
              onChange={(e) => setOpenAIKey(e.target.value)}
              className="api-key-input"
            />
            <div className="model-select">
              <label htmlFor="model-select">OpenAI Model</label>
              <select id="model-select" className="model-select-input">
                <option value="gpt-4o-mini">Gpt-4o-mini</option>
                <option value="gpt-4o">Gpt-4o</option>
                <option value="gpt-3.5-turbo">Gpt-3.5-turbo</option>
              </select>
            </div>
          </div>
        )}

        {serviceProvider === 'groq' && (
          <div className="groq-config">
            {!groqKeyVisible && (
              <button
                onClick={handleGroqKeyVisibility}
                className="show-key-button"
              >
                Enter Groq API Key (optional)
              </button>
            )}

            {groqKeyVisible && (
              <div className="groq-api-key">
                <label htmlFor="api-key-groq">Groq API Key</label>
                <input
                  type="password"
                  id="api-key-groq"
                  value={groqKey}
                  onChange={(e) => setGroqKey(e.target.value)}
                  className="api-key-input"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceProviderSelect;
