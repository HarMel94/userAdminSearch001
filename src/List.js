

export default function List({list}) {
        
    return (
        <div>
              {list.map((li) => {
                  return(
                      <h2 key={Math.random()}>
                          {li.name}
                      </h2>
                  )
              })}
        </div>
    )
}
