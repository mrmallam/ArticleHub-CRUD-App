import React from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie'

function ArticleList(props) {
    const [token] = useCookies(['myToken'])

    const editBtn = (article) => {
        props.setUpdateBtnPressed(true)
        props.editBtn(article)
    }

    const deleteArticle = (article) => {
        APIService.DeleteArticle(article.id, token['myToken'])
        .then(() => props.DeleteArticle(article))
        .catch(error => console.error(error))
    }

  return (
    <div>
    
    {props.articles && props.articles.map(article => {
            return (
                <div className='ArticleList' key = {article.id}>
                    <div className='line_article'></div>
                    
                    <div className='ArticleTitleContainer'>
                        <h2 className='ArticleTitle'>{article.title}</h2>
                    </div>
                    
                    <div className='ArticleDescriptionConatiner'>
                     <p className='ArticleDescription'>{article.description}</p>
                    </div>

                    <div className='btnArticleContainer'>

                        <div className='btnUpdateArticle'>
                            <button onClick={() => editBtn(article)} className='btn btn-primary'>Update</button>
                        </div>

                        <div className='btnDeleteArticle'>
                            <button onClick={() => deleteArticle(article)} className='btn btn-danger'>Delete</button>
                        </div>
 
                    </div>
                </div>
            )
        }
    )}
    </div>
  )
}

export default ArticleList
