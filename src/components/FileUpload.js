import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div className="file-upload-container">
      <div className="file-upload-sidebar">
        <h3>Upload Your Resume</h3>
        <div>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="file-input"
          />
          {!file ? (
            <div className="dummy-resume-message">
              <p>Using a dummy resume for demonstration purposes.</p>
              <a
                href="https://drive.google.com/file/d/1vTdtIPXEjqGyVgUgCO6HLiG9TSPcJ5eM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="dummy-resume-link"
              >
                [View Dummy Resume]
              </a>
            </div>
          ) : (
            <p className="file-name">File uploaded: {file.name}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
