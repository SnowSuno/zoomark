interface MeetingCreate {
    meetingId: number;
    name: string;
    password?: string;
    username?: string;
}

interface Meeting extends MeetingCreate {
    id: string;
    index: number;
}

type MeetingsModifier = (prev: Meeting[]) => Meeting[]

export type {MeetingCreate, Meeting, MeetingsModifier};
