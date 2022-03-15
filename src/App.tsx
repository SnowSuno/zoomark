import React, {useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./reducers";

import Header from "./components/Header";
import Grid from "./components/Grid";
import Modal from "./components/Modal";
import {updateMeetings} from "./reducers/meetings";
import {MeetingsModifier} from "./common/entities";



function App() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const items = useSelector(((state: RootState) => state.meetings.data));
    const dispatch = useDispatch();
    const updateItems = (modifier: MeetingsModifier) => dispatch(updateMeetings(modifier));

    return (
        <div className="App">
            <Header
                openModal={() => setModalOpen(true)}
            />
            <Grid
                items={items}
                updateItems={updateItems}
            />
            <Modal
                open={modalOpen}
                setOpen={setModalOpen}
            />
        </div>
    );
}

export default App;
