import './App.css';
import { useState, useEffect } from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';

function App() {
  const [articles, setArticles] = useState([])
  const [editArticles, setEditArticles] = useState(null)

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


  const editBtn = (article) => {
    setEditArticles(article)
  }

  const updatedInformation = (article) => {
    const new_article = articles.map(my_article => {
      if(my_article.id === article.id) {
        return article;
      }
      else {
        return my_article ;
      }
    })
    setArticles(new_article)
  }

  const articleForm = () => {
    setEditArticles({title: '', description: ''});
  }

  const insertedInformation = (article) => {
    const new_article = [...articles, article]
    setArticles(new_article)

  }

  const DeleteArticle = (article) => {
    const new_article = articles.filter(my_article => {
      if(my_article.id === article.id) return false;
      else return true;
      }
    )
    setArticles(new_article)
  }
  
    


  return (
    <div className="App">

      <div className='row'>

        <div className='col'>
          <h2>Django And ReactJS Course</h2>
          <br />
        </div>

        <div className='col'>
          <button onClick={articleForm} className='btn btn-primary'>Insert Article</button>
        </div>
 
      </div>

      <ArticleList articles = {articles} editBtn = {editBtn} DeleteArticle={DeleteArticle} />
      {editArticles ? <Form article={editArticles} updatedInformation={updatedInformation} insertedInformation={insertedInformation}/> : null}
    </div>
  ); 
}

export default App;
