import { useState } from "react";
import { useHistory } from "react-router-dom";


export default function Search() {

    const [value, setValue] = useState('')
    const history = useHistory()

    function btn(){
        if(value){
            history.push(`/${value}`)
        }
    }

    return (
        <>
            <form onSubmit={(e) => {
            e.preventDefault()
            btn()
            }}>
                <input 
                    type='text'
                    placeholder='Type here'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <button>Search</button>   
            </form> 
        </>
    )
}