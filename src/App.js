import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const dict = [
    {word: "React", meaning: "A JavaScript library for building user interfaces."},
    {word: "Component", meaning: "A reusable building block in React."},
    {word: "State", meaning: "An object that stores data for a component."}
]

export default function App() {
    const [inText, setInText] = useState('');
    const [defination, setDefination] = useState('');

    const handleSearchClick = () => {
        let meaningArray = dict.filter((x)=>x.word.toLowerCase() === inText.toLowerCase());
        if (meaningArray.length > 0) {
            setDefination(meaningArray[0].meaning);
        }
        else {
            setDefination("Word not found in the dictionary.");
        }
    }

    return (<div className="App">
            <h1>Dictionary App</h1>
            <input
                placeholder="Search for a word..."
                value={inText}
                onChange={(e) => {
                    setInText(e.target.value)
                }}
            />
            <button onClick={handleSearchClick}>Search</button>
            <h4>Defination: {defination}</h4>
        </div>);
}
