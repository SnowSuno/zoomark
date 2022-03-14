import React, {useState} from 'react';

import {useDisplayInput} from "./common/hooks";

import Header from "./components/Header";
import Grid from "./components/Grid";
import Modal from "./components/Modal";

function App() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <div className="App">
            <Header
                openModal={() => setModalOpen(true)}
            />
            <Grid />
            <Modal
                open={modalOpen}
                setOpen={setModalOpen}
            />
        </div>
    );
}

export default App;
