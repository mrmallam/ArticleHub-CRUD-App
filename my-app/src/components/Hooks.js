import React, {useState, useEffect} from 'react'

function Hooks() {
    const [articles, setArticles] = useState([])
    const [articleId, setArticleId] = useState(1)

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
        .then(response => response.json())
        .then(data => setArticles(data))
        .catch(err => console.error(err))
    }, [articleId])

  return (
    <div>

        {/* <button onClick={getNext} className='m-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Click me</button> */}
        
        <input className=" m-20 w-[500px] bg-gray-50 border border-gray-300  text-sm rounded-lg  p-2.5" type='text' value={articleId} onChange={e => {setArticleId(e.target.value)}}/>
        <h3>{articles.title}</h3>
    </div>
  )
} 

export default Hooks
