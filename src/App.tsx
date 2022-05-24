import { useTimeout } from "./Hooks/useTimeout";

function App() {
    const { show } = useTimeout(5000);
    return <>{show ? <div>Hello there!</div> : <div>Sorry!</div>}</>;
}

export default App;
