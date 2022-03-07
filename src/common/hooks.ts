import {useState, FormEvent} from "react";

function useDisplayInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value }
        } = e;
        setValue(value);
    };

    return {input: {value, onChange}, setValue};
}

export {useDisplayInput};
