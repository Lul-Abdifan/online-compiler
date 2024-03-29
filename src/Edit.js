import React, { useRef, useState} from 'react';
import Editor from '@monaco-editor/react';
import GroupSizesColors from './GroupSizesColors';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { files } from './language';
import axios from 'axios';
import qs from 'qs';

export default function Edit() {
  const [lang, setLang] = useState('javascript');
  const [theme, setTheme] = useState('vs-dark');
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleLanguageChange = (data) => {
    setLang(data);
  };

  const handleThemeChange = (event, newTheme) => {
    setTheme(newTheme);
  };

  const editorRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    // Set the editorRef once the editor is mounted
    editorRef.current = editor;
  };

  const handleRunClick = async () => {
    try {
      if (!editorRef.current) {
        console.error('Editor reference is null.');
        return;
      }

      const userCode = editorRef.current.getValue();
      console.log(userCode);

      // Show loading indicator
      setLoading(true);

      const requestData = qs.stringify({
        code: userCode,
        language: files[lang].language,
        input: '',
      });

      const apiConfig = {
        method: 'post',
        url: 'https://api.codex.jaagrav.in',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: requestData,
      };

      const response = await axios(apiConfig);

      setOutput(response.data.output || '');

      if (response.data.error) {
        setError(response.data.error);
      } else {
        setError('');
      }
    } catch (error) {
      console.error('API Error:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <div style={{display: 'flex', margin: '50px'}}>
    <GroupSizesColors onClickFromButton ={onClickFromButtons}/>
<div >
      
<div style={{height: "75vh",width: "45vw"}}>
<h2>Input is here
       <Button variant="outlined" disabled style={{marginLeft:"20px"}}>
  {file.name}
</Button>
</h2>
      <Editor
      key={lang} 
      theme="vs-dark"
        defaultLanguage={file.language}
        onChange={handleEditorChange}
        defaultValue={file.value}
        
       
      />
    </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
       <div>
        <h2>This is output</h2>
      </div>
      <div>
        <Button variant="contained" color="success" style={{marginLeft: "20px"}}
          onClick={() => {
            alert('clicked');
          }}
        >
          Run
        </Button>
      </div>
    </div>
    
  </div>
  )
}
=======
    <div style={{ display: 'flex', margin: '10px 30px' }}>
      <GroupSizesColors onClickFromButton={handleLanguageChange} />
      <div style={{ height: '75vh', width: '45vw' }}>
        <div>
          <ToggleButtonGroup
            color="primary"
            value={theme}
            exclusive
            onChange={handleThemeChange}
            aria-label="Theme"
          >
            <ToggleButton
              value={theme === 'light' ? 'vs-dark' : 'light'}
              style={{
                background: theme === 'light' ? '#333333' : '#ffffff',
                color: theme === 'light' ? '#333333' : '#ffffff',
                border: '5px solid #cccccc',
                borderRadius: '10px',
                marginBottom: '15px',
              }}
            >
              {theme === 'light' ? '🌙' : '🔆'}
            </ToggleButton>
          </ToggleButtonGroup>

          <span style={{ marginLeft: '150px' }}>Input Is Here</span>
          <Button variant="outlined" disabled style={{ marginLeft: '20px' }}>
            {files[lang].name}
          </Button>
        </div>
        <Editor
          key={lang}
          theme={theme === 'light' ? 'light' : 'vs-dark'}
          defaultLanguage={files[lang].language}
          onMount={handleEditorDidMount}
          loading = {false}   
          />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ height: '75vh', width: '40vw' }}>
          <h2>This is output</h2>
          <Editor
            key={output}
            defaultValue={error === '' ? output : `Error: ${error}`}
loading = {false}   
       />
        </div>
        <div>
          <Button
            variant="contained"
            color="success"
            style={{ marginLeft: '20px' }}
            onClick={handleRunClick}
            disabled={loading} // Disable the button when loading
          >
            {loading ? 'Running...' : 'Run'}
          </Button>
        </div>
      </div>
    </div>
  );
}
>>>>>>> 753f40e0a1cda0fb4adfa1051d7ec7634fb69fd9
