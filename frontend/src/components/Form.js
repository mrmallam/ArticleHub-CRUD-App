import React, {useState, useEffect} from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie' 

function Form(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [token] = useCookies(['myToken'])

    useEffect(() => {
        setTitle(props.article.title)
        setDescription(props.article.description)
    }, [props.article])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, description}, token['myToken'])
        .then(resp => props.updatedInformation(resp))
    }

    const insertArticle = () => {
        props.setInserBtnPressed(false);
        APIService.InsertArticle({title, description}, token['myToken'])
        .then(resp => props.insertedInformation(resp))
    }
    
  return (
    <div className=''>
        {props.article ? (
            <div className='form'>


                <div className='form_title_container'>
                    <div className='form_title'>
                      <label htmlFor='text' className='form-label'>Title</label>
                    </div>
                    <div className='form_title_input'>
                        <input type='text' className='form-control' id='title' placeholder='Enter Title' value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                </div>


                <div className='form_description_container'>
                    <div className='form_description_title'>
                      <label htmlFor='description' className='form-label'>Description</label>
                    </div>
        
                    <div className='form_description_input'>
                    <textarea className='form-control' id='description' placeholder='Enter Description' rows='5' value={description} onChange={e => setDescription(e.target.value)}  /> 
                    </div>
                </div>
                
                <div className='btn_insert_article'>
                    { props.article.id ? 
                        <button className='btn btn-success' onClick={updateArticle}>Update Article</button>
                        : 
                        <button onClick={insertArticle} className='btn btn-success'>Insert Article</button>
                    }
                </div>

               
            </div>

        ) : null}
    </div>
  )
}
export default Form
