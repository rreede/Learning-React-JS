import * as React from 'react';
import Search from "./components/Search";

const list = [
  {
    id: 1,
    title:'React is Fun',
    author: 'Rene',
},
{
  id: 2,
  title:'React is Fun',
  author: 'Rene',
},
]




function App(){



  return(
    <div>

    <Search/>

    <ul>
      {list.map(function (item) {
        return <li key={item.id}>
          <span>{item.id}</span>
          <span> {item.title}</span>
          <span> {item.author}</span>
          </li>
      })}
    </ul>

    </div>
  )
}

export default App;