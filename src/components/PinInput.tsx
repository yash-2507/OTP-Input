import React, { useRef, useState } from "react";
import "./styles/Pin.css";

interface PinType {
    length: number;
    onChange: (otp: string) => void;
}

export default function PinInput({ length, onChange }: PinType) {
    let arr = new Array(length).fill(0);
    const inputRef = useRef<HTMLInputElement[]>([]);
    const [otp, setOtp] = useState<string>("");

    return (
        <>
            <h1>PinInput</h1>
            <div style={{ display: "flex", gap: 20 }}>
                {arr.map((_, i) => {
                    return (
                        <input
                            onChange={(e) => {
                                setOtp(otp + e.target.value);
                            }}
                            onKeyUp={(e) => {
                                // console.log(e);
                                if (e.code === "Backspace") {
                                    inputRef.current[i - 1].focus();
                                    inputRef.current[i - 1].select();
                                } else {
                                    inputRef.current[i + 1].focus();
                                }
                                onChange(otp);
                            }}
                            ref={(element) => {
                                if (inputRef.current && element) {
                                    inputRef.current[i] = element;
                                }
                            }}
                            type="text"
                            key={i}
                            className="input"
                            maxLength={1}
                        />
                    );
                })}
            </div>
        </>
    );
}
