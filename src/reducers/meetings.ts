import {Meeting} from "../common/entities";

const ADD = 'meetings/ADD' as const;
const DELETE = 'meetings/DELETE' as const;

export const addMeeting = (meeting: Meeting) => ({
    type: ADD,
    payload: {meeting}
});

export const deleteMeeting = (meeting: Meeting) => ({
    type: DELETE,
    payload: {meeting}
});

type MeetingsAction =
    | ReturnType<typeof addMeeting>
    | ReturnType<typeof deleteMeeting>;

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
        default:
            return state;
    }
}

export default meetings;
