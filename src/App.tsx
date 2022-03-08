import React from 'react';

import {useDisplayInput} from "./common/hooks";

import Header from "./components/Header";
import Grid from "./components/Grid";

function App() {
    const {input} = useDisplayInput("");
    console.log(<input type={"text"}/>)

    return (
        <div className="App">
            <Header />
            <Grid />
        </div>
    );
}

export default App;
