import { useState } from "react";
import { Display } from "./Display";

interface dataType {
    inputId: string;
    inputModel: string;
    inputMakeYear: string;
    inputOS: string;
    inputScreenHeight: string;
    inputScreenWidth: string;
    inputPrice: string;
}

function App() {
    const [data, setData] = useState<dataType[]>([]);
    const [inputData, setInputData] = useState({
        inputId: "",
        inputModel: "",
        inputMakeYear: "",
        inputOS: "",
        inputScreenHeight: "",
        inputScreenWidth: "",
        inputPrice: "",
    });

    const addProduct = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setData([...data, inputData]);
    };

    return (
        <>
            <form onSubmit={(e) => addProduct(e)}>
                <input
                    type="text"
                    placeholder="Enter the ID ..."
                    required
                    name="inputId"
                    onChange={(e) => {
                        setInputData({ ...inputData, inputId: e.target.value });
                    }}
                />
                <input
                    type="text"
                    placeholder="Enter the Model ..."
                    required
                    name="inputModel"
                    onChange={(e) => {
                        setInputData({
                            ...inputData,
                            inputModel: e.target.value,
                        });
                    }}
                />
                <input
                    type="number"
                    placeholder="Enter the make year ..."
                    required
                    name="inputMakeYear"
                    onChange={(e) => {
                        setInputData({
                            ...inputData,
                            inputMakeYear: e.target.value,
                        });
                    }}
                />
                <input
                    type="text"
                    placeholder="Enter the OS ..."
                    name="inputOS"
                    onChange={(e) => {
                        setInputData({ ...inputData, inputOS: e.target.value });
                    }}
                />
                <input
                    type="number"
                    placeholder="Enter the Screen Height ..."
                    required
                    name="inputScreenHeight"
                    onChange={(e) => {
                        setInputData({
                            ...inputData,
                            inputScreenHeight: e.target.value,
                        });
                    }}
                />
                <input
                    type="number"
                    placeholder="Enter the Screen Width ..."
                    required
                    name="inputScreenWidth"
                    onChange={(e) => {
                        setInputData({
                            ...inputData,
                            inputScreenWidth: e.target.value,
                        });
                    }}
                />
                <input
                    type="number"
                    placeholder="Enter the price ..."
                    required
                    name="inputPrice"
                    onChange={(e) => {
                        setInputData({
                            ...inputData,
                            inputPrice: e.target.value,
                        });
                    }}
                />
                <button type="submit">Add the Details</button>
            </form>

            <Display arrData={data} />
        </>
    );
}

export default App;
