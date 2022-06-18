import './App.css';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(1);
    return (
        <div className="App">
            <div className="container">
                <span
                    className="plusMinus"
                    onClick={() => count > 1 && setCount(count - 1)}
                >
                    -
                </span>
                <div className="round">{count}</div>
                <span className="plusMinus" onClick={() => setCount(count + 1)}>
                    +
                </span>
            </div>
        </div>
    );
}

export default App;
