import List from "./List"
import React from "react";


export const Lists=({lists})=>{
    console.log('lisits',lists)
    return (        
            <ul className="list-group list-group-flush">
              {lists.map((list, key) => (  
                <List list={list} key={list.id} />
              ))}
            </ul>
         
    )
};

export default Lists;


