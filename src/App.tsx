import React from 'react';
import './App.css';

import {useDisplayInput} from "./common/hooks";

import Input from "./components/atoms/Input";

function App() {
    const {input} = useDisplayInput("");
    console.log(<input type={"text"}/>)

    return (
        <div className="App">
            <header className="App-header">

                <Input
                    {...input}
                />
            </header>
        </div>
    );
}

export default App;
