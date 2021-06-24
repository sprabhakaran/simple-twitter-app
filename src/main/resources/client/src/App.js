import logo from './logo.svg';
import './App.css';

const myHTML = `<h1>John Doe</h1>`;

const App = () => <div dangerouslySetInnerHTML={{ __html: myHTML }} />;

export default App;
