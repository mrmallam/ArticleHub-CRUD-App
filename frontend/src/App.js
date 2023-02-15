import './App.css';
import { useState, useEffect } from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState([])
  const [editArticles, setEditArticles] = useState(null)
  const [token, setToken, removeToken] = useCookies(['myToken'])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/', {
      'method': 'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token ${token['myToken']}`
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])

  let history = useHistory()
  useEffect(() => {
    if(!token['myToken']) {
        history.push('/')
    }
  }, [token, history]);


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
      if(my_article.id === article.id){
        return false;
      } 
      else{return true;}
      }
    )

    setArticles(new_article)
  }

  const logoutBtn = () => {
    removeToken(['myToken'])
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

        <div className='col'>
          <button onClick={logoutBtn} className='btn btn-primary'>Logout</button>
        </div>
 
      </div>

      <ArticleList articles = {articles} editBtn = {editBtn} DeleteArticle={DeleteArticle} />
      
      {editArticles ? <Form article={editArticles} updatedInformation={updatedInformation} insertedInformation={insertedInformation}/> : null}
    </div>
  ); 
}

export default App;
