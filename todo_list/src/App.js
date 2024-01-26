import { useEffect, useState, createContext } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import TasckItems from "./components/TasckItems";

export const TContext = createContext();

function App() {
    const [tasck, setTasck] = useState([]);

    const onRemove = (id) => {
        setTasck(tasck.filter((item) => item.id !== id));
    };

    const onDone = (id) => {
        setTasck(
            tasck.map((item) => {
                if (item.id === id) {
                    item.done = !item.done;
                    return item;
                } else {
                    return item;
                }
            })
        );
    };

    // useEffect(() => {
    //     console.log(tasck);
    //     return console.log("Компонетна удалена");
    // });

    return (
        <TContext.Provider value={{onRemove, onDone}}>
            <div className="App">
                <ToDoForm tasck={tasck} setTasck={setTasck} />
                <TasckItems tasck={tasck} />
            </div>
        </TContext.Provider>
    );
}

export default App;
