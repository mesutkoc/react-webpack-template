import React from "react";
import './App.scss';

const App = ({ page }) => {
    return (
        <div className="app">
            <h1>Hello world! I am using React!</h1>
            <h6>{page}</h6>
        </div>
    )
}

export default App;