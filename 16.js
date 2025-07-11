import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./16_1";
import Card from "./16_2";
import dukan from "./16_4";


function App() {
    return (
        <Provider store={dukan}>
            <Header/>
            <Card/>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)