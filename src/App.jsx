import React from "react";

export default function App(){
    const [count, setCount] = React.useState(0);

    return (
        <button 
            onClick={() => {setCount(count + 1)}} 
            className="px-4 py-1 bg-blue-900 text-blue-200">Clique aqui! {count}
        </button>
    );
}