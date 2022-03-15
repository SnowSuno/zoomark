import {v4 as uuid} from "uuid";

import {MeetingCreate, Meeting, MeetingsModifier} from "../common/entities";

const ADD = 'meetings/ADD' as const;
const DELETE = 'meetings/DELETE' as const;
const UPDATE = 'meetings/UPDATE' as const;

export const addMeeting = (meeting: MeetingCreate) => ({
    type: ADD,
    payload: {meeting}
});

export const deleteMeeting = (meeting: Meeting) => ({
    type: DELETE,
    payload: {meeting}
});

export const updateMeetings = (modifier: MeetingsModifier) => ({
    type: UPDATE,
    payload: {modifier}
})

type MeetingsAction =
    | ReturnType<typeof addMeeting>
    | ReturnType<typeof deleteMeeting>
    | ReturnType<typeof updateMeetings>;

type MeetingsState = {
    data: Meeting[];
};

const initialState: MeetingsState = {
    data: []
};

function meetings(
    state: MeetingsState = initialState,
    action: MeetingsAction
): MeetingsState {
    switch (action.type) {
        case ADD:
            return {
                data: state.data.concat({
                    ...action.payload.meeting,
                    id: uuid(),
                    index: state.data.length,
                })
            };
        case DELETE:
            return {
                data: state.data.filter(
                    meeting => meeting.id !== action.payload.meeting.id
                )
            };
        case UPDATE:
            return {data: action.payload.modifier(state.data)};
        default:
            return state;
    }
}

export default meetings;
