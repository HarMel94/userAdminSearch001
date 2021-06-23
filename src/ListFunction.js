import { useState } from "react"
import List from "./List"

export default function ListFunction(props) {

    const [value, setVlaue] = useState('') 
    const [list, setList] = useState([
        {
            name : 'Kaen',
        },
        {
            name : 'Abel',
        }
    ])

    function Add() {
        if(value){
            setList([
                ...list,
                {
                    name : value
                }
            ])
        }
    }

    function Liss({li}) {
        return(
            <div>                
                <label>
                    <input type='checkbox'/>
                    {li.name}
                    <button>x</button>
                </label>
            </div>
        )
    }
    return(
        <>
          <h1>
              {list.map((li) => {
                  return(
                      <Liss key={Math.random()} li={li}/>
                  )
              })}
          </h1>
          <form
            onSubmit={(e) => {
                e.preventDefault();
                Add()
                setVlaue('')
            }}
          >   
          <input onChange={(e) => setVlaue(e.target.value)}/>
          <button>Add list</button>
          </form>
          <h2>{value}</h2>
        </>
    )
}