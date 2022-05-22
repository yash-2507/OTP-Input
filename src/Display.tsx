import React from "react";

interface dataType {
    inputId: string;
    inputModel: string;
    inputMakeYear: string;
    inputOS: string;
    inputScreenHeight: string;
    inputScreenWidth: string;
    inputPrice: string;
}

interface Props {
    arrData: dataType[];
}

export const Display: React.FC<Props> = ({ arrData }) => {
    // console.log(arrData);
    return (
        <>
            {arrData.map((elem, index) => {
                return (
                    <div key={index} style={{ display: "flex", gap: 50 }}>
                        <span>{elem.inputId}</span>
                        <span>{elem.inputModel}</span>
                        <span>{elem.inputMakeYear}</span>
                        <span>{elem.inputOS}</span>
                        <span>{elem.inputScreenWidth}</span>
                        <span>{elem.inputScreenHeight}</span>
                        <span>{elem.inputPrice}</span>
                    </div>
                );
            })}
        </>
    );
};
