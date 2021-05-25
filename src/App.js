import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Button from './components/Button.jsx';
import Card from './components/Card';
import Timer from './components/Timer';
import Clock from './components/Clock';
import React, { useState } from 'react';
import Todo from './components/Todo';

export const MyThemeContext = React.createContext(null); 

function App() {
  const [theme, setTheme] = useState('green');
  const updateTheme = () => {
    setTheme(theme === 'green' ? 'white' : 'green');
  };
  return (
    <div className="App">
      <header className="App-header">
          <MyThemeContext.Provider value={{ theme, updateTheme }}>
            {/* <Button type="primary" /> */}
            {/* <Card /> */}
              {/* <Timer /> */}
              <Todo />
            {/* <Clock /> */}
            {/* <Button type="secondary" />
            <Button type="warning" />
            <Button/>
          <Button/> */}
        </MyThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
