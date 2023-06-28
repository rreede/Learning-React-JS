
const title = 'React';

const welcome = {
  greeting: 'Hey',
  title: 'React',
}

function getTitle(title) {
    return title;
  }

function Search() {



return(
<>

    <h1>Hello , {getTitle('Rene')} </h1>
    <h1>Hello, {title}</h1>
    <label htmlFor=""></label>
    <input id='search' type="text" />

  {welcome.greeting}


  <hr/>
  
  </>
  )
}

export default Search;