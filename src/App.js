import './App.css';
import Login from './components/login/Login';
function App() {
    const a = 1;
    const b = 2;
    return (
        <div className="App">
            <Login />
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <ul>
                    <li>Apple</li>
                    <li>Banana</li>
                    <li>Orange</li>
                </ul>
                <h1 data-testid="mytestid">Hello</h1>
                <span title="sum">{a + b}</span>
            </header>
        </div>
    );
}

export default App;