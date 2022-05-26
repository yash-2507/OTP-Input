import { useTimer } from "./Hooks/useTimer";

function App() {
    const { start, clear, count } = useTimer(40);

    return (
        <>
            <h1>useTimer Hook</h1>
            <div>
                <p>
                    {count.hrs}:{count.mins}:{count.secs}
                </p>
                <button onClick- {() =>{
                    start(60)
                }}>
                    Start Timer for 1 minute
                </button>
                <button
                    onClick={() => {
                        clear;
                    }}
                >
                    Clear Timer
                </button>
            </div>
        </>
    );
}

export default App;
