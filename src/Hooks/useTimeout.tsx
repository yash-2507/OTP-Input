import { useState } from "react";

export const useTimeout = (init: number) => {
    const [delay, setDelay] = useState(init);
    const [show, setShow] = useState(false);

    const id = setTimeout(() => {
        setShow(true);
    }, delay);

    return { show };
};
