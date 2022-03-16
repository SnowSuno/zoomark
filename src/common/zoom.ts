// {
//     jmak: b.joinMeetingAccessToken,
//     action: b.action,
//     confno: b.meetingNumber,
//     pwd: b.meetingPassword,
//     wd: b.webData,
//     uid: b.userId,
//     uname: y ? void 0 : b.userDisplayName,
//     stype: b.userSnsType,
//     token: b.userLoginToken,
//     pk: b.userJoinData,
//     tk: b.webinarToken,
//     zc: 0 === b.zoomControlOptions ? void 0 : b.zoomControlOptions,
//     confid: {
//         utid: b.unifiedTrackingId,
//         cmd: b.command,
//         email: b.userEmail,
//         uss: b.urlSchemeSignature,
//         tid: b.jmfId || Hi(),
//         zak: b.zak,
//         domain: b.launcherDomain,
//         nonce: b.nonce,
//         app: b.command ? b.app || xr() : void 0
//     }
import isMobile from "is-mobile";

import {Meeting} from "./entities";

export const joinMeeting = (meeting: Meeting) => {
    window.location.href = buildURI({
        confno: meeting.meetingId,
        zc: 0,
        pwd: meeting.password,
        uname: meeting.username,
    });
}

const buildURI = (parameters: {[key: string]: any}): string => {
    const scheme = isMobile() ? "zoomus" : "zoommtg";
    const paramString = Object
        .entries(parameters)
        .filter(([, value]) => value)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
    return `${scheme}://zoom.us/join?${paramString}`;
}
