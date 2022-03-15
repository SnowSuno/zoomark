export const zoomIdFormatter = (value: string): string => {
    return [
        value.substring(0, 3)
    ].concat(value.length < 11
        ? [
            value.substring(3, 6),
            value.substring(6, 10),
        ]
        : [
            value.substring(3, 7),
            value.substring(7, 11),
        ]
    ).filter(
        value => value.length > 0
    ).join(" ");
};
