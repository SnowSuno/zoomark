import {Meeting, MeetingsModifier} from "../common/entities";

const ADD = 'meetings/ADD' as const;
const DELETE = 'meetings/DELETE' as const;
const UPDATE = 'meetings/UPDATE' as const;

export const addMeeting = (meeting: Meeting) => ({
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
            return state.data.some(
                meeting => meeting.id === action.payload.meeting.id
            )
                ? state
                : {data: state.data.concat(action.payload.meeting)};
        case DELETE:
            return {
                data: state.data.filter(
                    meeting => meeting.meetingId !== action.payload.meeting.meetingId
                )
            };
        case UPDATE:
            return {data: action.payload.modifier(state.data)};
        default:
            return state;
    }
}

export default meetings;
