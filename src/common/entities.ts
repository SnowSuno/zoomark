interface Meeting {
    id: string;
    index: number;
    meetingId: number;
    name: string;
    password?: string;
    username?: string;
}

type MeetingsModifier = (prev: Meeting[]) => Meeting[]

export type {Meeting, MeetingsModifier};
