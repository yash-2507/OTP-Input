import { useFetch } from "./Hooks/useFetch";

function App() {
    const { loading, data, error } = useFetch(
        "http://jsonplaceholder.typicode.com/posts"
    );
    return <></>;
}

export default App;
