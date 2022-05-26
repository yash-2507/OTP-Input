import PinInput from "./components/PinInput";

function App() {
    const handleInputChange = (otp: string) => {
        console.log("OTP received", otp);
    };
    return (
        <>
            <PinInput length={5} onChange={handleInputChange} />
        </>
    );
}

export default App;
