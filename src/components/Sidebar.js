import React from 'react';
import ServiceProviderSelect from './ServiceProviderSelect';
import FileUpload from './FileUpload';

function Sidebar({
  serviceProvider,
  setServiceProvider,
  activeOptionIndex,
  setActiveOptionIndex,
}) {
  return (
    <div className="sidebar">
      <FileUpload />

      <ServiceProviderSelect
        serviceProvider={serviceProvider}
        setServiceProvider={setServiceProvider}
      />

      <div className="sidebar-note">
        <p>
          <strong class="highlight-note">Note:</strong>
        </p>
        <p>
          This multi-agent system works best with OpenAI. llama 3.1 may not
          always produce optimal results.
        </p>
        <p>
          Any key provided will not be stored or shared it will be used only for
          the current session.
        </p>
        <div style={{ padding: '10px 0' }}>
          If you like the project, give a{' '}
          <a
            href="https://github.com/amanv1906/GENAI-CareerAssistant-Multiagent"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            ⭐ on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
