import React from 'react';

import {useDisplayInput} from "./common/hooks";

import Input from "./components/atoms/Input";
import Grid from "./components/Grid";

function App() {
    const {input} = useDisplayInput("");
    console.log(<input type={"text"}/>)

    return (
        <div className="App">
            <Grid />
        </div>
    );
}

export default App;
