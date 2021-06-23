

export default function List({list}) {
        
    return (
        <div>
              {list.map((li) => {
                  return(
                      <h2 key={Math.random()}>
                          <button onClick={() => alert(li.name)}>x</button>
                          {li.name}
                      </h2>
                  )
              })}
        </div>
    )
}
