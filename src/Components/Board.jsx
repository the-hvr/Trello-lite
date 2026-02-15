import { useState } from "react";
import './Style/Board.css';

import NavBar from "./NavBar";
import Column from "./Column";
import Footer from "./Footer";

export default function Board(){
    const [board, setBoard] = useState({
        todo: [
            { id: "1", title: "Design landing page layout", priority: "high", createdAt: new Date().toISOString() },
            { id: "2", title: "Implement user authentication", priority: "medium", createdAt: new Date().toISOString() }
        ],
        doing: [
            { id: "3", title: "Build task card component", priority: "high", createdAt: new Date().toISOString() }
        ],
        done: [
            { id: "4", title: "Initialize React project", priority: "low", createdAt: new Date().toISOString() }
        ]
});

    // let [board, setBoard] = useState({
    //   todo: [],
    //   doing: [],
    //     done: [],
    // });

    


    return (
        <>
            <NavBar/>
            <div className="board">
                <Column 
                    title = 'To Do'
                    columnId = 'todo' 
                    tasks = {board.todo}   
                    setBoard = {setBoard}
                />

                <Column 
                    title = 'Doing'
                    columnId = 'doing' 
                    tasks = {board.doing}   
                    setBoard = {setBoard}
                />

                <Column 
                    title = 'Done'
                    columnId = 'done' 
                    tasks = {board.done}   
                    setBoard = {setBoard}
                />
            </div>
            <Footer/>
        </>   
    );
}