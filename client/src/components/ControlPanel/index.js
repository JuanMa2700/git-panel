import React, { useState } from 'react';
import { useAppState } from '../../contexts/AppStateContext';
import './styles.css';
import { GrConfigure } from 'react-icons/gr';
import { Button } from 'react-bootstrap';

export default function ControlPanelComponent() {
  const {
    mode,
    setMode,
    authModes,
    theme,
    setTheme,
    themeModes,
  } = useAppState();

  const [show, setShow] = useState(false);

  return (
    <div className={`control-panel ${!show && 'hidden'}`}>
      <div
        className={`icon-button ${show && 'hidden'}`}
        onClick={() => setShow((prev) => !prev)}
      >
        <GrConfigure />
      </div>
      <div
        className={`setup 
        ${!show && 'hidden'} d-flex flex-column align-items-center`}
      >
        <h4>Theme</h4>
        <div className='d-flex flex-row p-2 align-items-center'>
          <p>Light</p>
          <input
            type='radio'
            name='theme'
            value={themeModes.LIGHT}
            checked={theme === themeModes.LIGHT}
            onChange={() => setTheme(themeModes.LIGHT)}
          />
          <input
            type='radio'
            name='theme'
            value={themeModes.DARK}
            checked={theme === themeModes.DARK}
            onChange={() => setTheme(themeModes.DARK)}
          />
          <p>Dark</p>
        </div>
        <h4>Mode</h4>
        <div className='d-flex flex-row p-2'>
          <p>Local</p>
          <input
            type='radio'
            name='auth'
            value={authModes.LOCAL}
            checked={mode === authModes.LOCAL}
            onChange={() => setMode(authModes.LOCAL)}
          />
          <input
            type='radio'
            name='auth'
            value={authModes.API}
            checked={mode === authModes.API}
            onChange={() => setMode(authModes.API)}
          />
          <p>Api</p>
        </div>
        <Button
          variant='link'
          style={{ margin: 'auto' }}
          onClick={() => setShow((prev) => !prev)}
        >
          close
        </Button>
      </div>
    </div>
  );
}
