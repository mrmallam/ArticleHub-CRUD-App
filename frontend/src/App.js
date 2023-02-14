import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [articles, setArticles] = useState(['1 Artcs', '2 artcle'])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/', {
      'method': 'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 3be75509a53db8275bf637d367c180fbb772e466'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])


  return (
    <div className="App">

      <h3>Django And ReactJS Course</h3>

      {articles.map(article => {
        return <h3> {article.title} </h3>
      })}

    </div>
  );
}

export default App;
