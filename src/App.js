
import { useState } from 'react';
import './App.css';
import Add from './Components/Add';
import MoviesList from './Components/MoviesList';
import { movies } from './Data';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  const [list, setList] = useState(movies)
  const [text, setText] = useState("")
  const [stars, setStars] = useState(1)

  //handelAdd
  let handelAdd=(newmovies)=>{
setList([...list,newmovies])
  }
  //handel change navbar
  let handelchange=(e)=>{
    setText(e.target.value)
  }
  //handel stars
  let handelrating=(x)=>{setStars(x)

  }
  return (
    <div className="App">
      <NavBar text={text} rating={stars} handelchange={handelchange} handelrating={handelrating}/>
   <MoviesList movie={list.filter(el=>el.name.toLowerCase().includes(text.toLowerCase())&&(el.rating>=stars))}/>
   <Add add={handelAdd}/>
   <Footer/>
    </div>
  );
}

export default App;
