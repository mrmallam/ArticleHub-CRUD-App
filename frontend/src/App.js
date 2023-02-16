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
  const [inserBtnPressed, setInserBtnPressed] = useState(true)

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
    setInserBtnPressed(true)
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


      <div className='logout-welcome'>
        <h2 className='welcome'>
          Welcome <p></p>
        </h2>
        <a onClick={logoutBtn} className='logoutBtn'>Logout</a>
      </div>

      <div className='lineHeader'></div>

      <div className='insert_article_btn_container'>
        <a className='insert_article_btn' onClick={articleForm}>+</a>
      </div>
      
      {editArticles && inserBtnPressed ? <Form article={editArticles} setInserBtnPressed={setInserBtnPressed} updatedInformation={updatedInformation}  insertedInformation={insertedInformation}/> : null}

      <ArticleList articles = {articles} editBtn = {editBtn} DeleteArticle={DeleteArticle} />


    </div>
  ); 
}

export default App;
