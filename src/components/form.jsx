import { useState } from 'react';

const defaultArticle = {
   id: '',
   title: '',
   content: '',
   image: '',
   category: [],
   tags: [],
   state: ''
};

let articlesList = [];

function Form() {

   const [article, setArticle] = useState({} = defaultArticle);
   const [articles, setArticles] = useState(articlesList);
   const handlerSubmit = (e) => {
      e.preventDefault();
      //logica invio form
      console.log(article)
      setArticles(articlesList.push(article))
      console.log(articlesList)
   }

   //nuovo articolo:
   const handlerNewArticle = (e) => {
      let { name, value } = e.target;

      setArticle({
         ...article,
         [name]: value
      })
   }
   //rimuovi articolo:
   // const handlerRemoveArticle = (id) => {
   //    const updatedArticleList = articlesList.filter(article => (article.id !== id))
   //    setArticlesList(updatedArticleList)
   // }

   return (
      <div className="container form-container">
         <form action="" onSubmit={handlerSubmit}>
            <input
               type="text"
               placeholder='Titolo...'
               name='title'
               value={article.title}
               onChange={handlerNewArticle}
               required
            />
            <input
               type="text"
               placeholder="Inserisci il testo dell'articolo"
               name='content'
               value={article.content}
               onChange={handlerNewArticle}
               required
            />
            <select name="category" id="category">
               <option value="1">Intelligenza Artificiale</option>
               <option value="2">Innovazioni Tecnologiche</option>
               <option value="3">Software e App</option>
               <option value="4">Moda e tendenze</option>
               <option value="5">Scuola e Istruzione</option>
               <option value="6">Viaggi e Turismo</option>
            </select>



            <button className="btn" type="submit">Genera</button>
         </form>

         <div className="articles-section">
            {articlesList.map(article => (
               <div key={article.id} className="article">
                  <div className="article-text">
                     <h1>{article.title}</h1>
                     <p>{article.content}</p>
                  </div>
                  <div
                     className="article-trash"
                     onClick={() => handlerRemoveArticle(article.id)}
                  >
                     <i className="fa-solid fa-trash"></i>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Form