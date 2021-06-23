import { useState } from "react";

export default function ListAdd({Add}) {

    const [val, setVal] = useState('');

    return (
        <>          
          <form
                onSubmit={(e) => {
                    e.preventDefault();
                    Add(val)
                    setVal('')
                }}
            >   
            <input value={val} 
                onChange={(e) => setVal(e.target.value)}/>

            <button>Add list</button>

          </form>
        </>
    )
};