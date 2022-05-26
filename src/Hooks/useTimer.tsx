import { useState } from "react";

export const useTimer = (init: number) => {
    const [id, setId] = useState<null>(null);
    const [status, setStatus] = useState("OFF");
    const [count, setCount] = useState({
        hrs: "00",
        mins: "00",
        secs: "00",
    });

    const start = (durationInSecs: number) => {
        if (status == "ON" || id != null) {
            console.log("Another timer already running");
        }

        if (!durationInSecs) {
            console.log("Invalid Duration supplied");
        }
        try {
            const thisId = setInterval(() => {
                const hrs = Math.floor(durationInSecs / 3600).toString();
                const mins = Math.floor(durationInSecs / 60).toString();
                const secs = Math.floor(durationInSecs % 60).toString();

                setCount({ hrs, mins, secs });

                if (--durationInSecs < 0) {
                    clear();
                }
            }, 1000);

            // setId(thisId);
            setStatus("ON");
            return { ok: true };
        } catch (error) {
            return { ok: false };
        }
    };

    const clear = () => {
        if (id == null || status == "OFF") {
            return;
        }

        clearInterval(id);
        setStatus("OFF");
        setId(null);
        setCount({ hrs: "00", mins: "00", secs: "00" });
        return { ok: true };
    };
    return { start, clear, count };
};
