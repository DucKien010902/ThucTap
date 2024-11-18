import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import biểu tượng Chevron
import ServiceProviderSelect from './ServiceProviderSelect';
import FileUpload from './FileUpload';

function Sidebar({
  serviceProvider,
  setServiceProvider,
  activeOptionIndex,
  setActiveOptionIndex,
}) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      {/* Nút Ẩn/Hiện Sidebar */}
      <button
        className="button-next"
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      >
        {isSidebarVisible ? (
          <FaChevronLeft size={20} />
        ) : (
          <FaChevronRight size={20} />
        )}
      </button>

      {/* Sidebar */}
      {isSidebarVisible && (
        <div className="sidebar" style={{ transition: 'all 0.3s ease' }}>
          <FileUpload />

          <ServiceProviderSelect
            serviceProvider={serviceProvider}
            setServiceProvider={setServiceProvider}
          />

          <div className="sidebar-note">
            <p>
              <strong className="highlight-note">Note:</strong>
            </p>
            <p>
              This multi-agent system works best with OpenAI. llama 3.1 may not
              always produce optimal results.
            </p>
            <p>
              Any key provided will not be stored or shared it will be used only
              for the current session.
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
      )}
    </div>
  );
}

export default Sidebar;
