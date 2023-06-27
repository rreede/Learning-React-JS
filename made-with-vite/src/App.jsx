import * as React from 'react';

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


const title = 'React';

const welcome = {
  greeting: 'Hey',
  title: 'React',
}

function App(){

  function getTitle(title) {
    return title;
  }

  return(
    <div>

      <h1>Hello , {getTitle('Rene')} </h1>
      <h1>Hello, {title}</h1>
      <label htmlFor=""></label>
      <input id='search' type="text" />

    {welcome.greeting}


    <hr/>

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