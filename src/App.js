import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Button from './components/Button.jsx';
import Card from './components/Card';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Button type="primary" /> */}
        {/* <Card /> */}
        <Timer />
        {/* <Button type="secondary" />
        <Button type="warning" />
        <Button/>
        <Button/> */}
      </header>
    </div>
  );
}

export default App;
