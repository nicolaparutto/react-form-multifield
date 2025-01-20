import { useState } from 'react';

const defaultArticle = {
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
      setArticles(articlesList.push(article))
   }
   //nuovo articolo:
   const handlerNewArticle = (e) => {
      let { name, value } = e.target;

      setArticle({
         ...article,
         id: Date.now(),
         [name]: value
      })
   }
   //rimuovi articolo:
   const handlerRemoveArticle = (id) => {
      const updatedList = articlesList.filter(article => (article.id !== id
      ))
      articlesList = updatedList
      setArticles(updatedList)
   }

   return (
      <div className="container form-container">
         <form action="" onSubmit={handlerSubmit}>
            <div>
               <input
                  className='form-title'
                  type="text"
                  placeholder='Titolo...'
                  name='title'
                  value={article.title}
                  onChange={handlerNewArticle}
                  required
               />
               <textarea
                  className='form-textarea'
                  type="text"
                  placeholder="Inserisci il testo dell'articolo..."
                  name='content'
                  value={article.content}
                  onChange={handlerNewArticle}
                  required
               />
            </div>
            <div>
               <span className='select-title'>Scegli una categoria:</span>
               <select className='form-category-select' name="category" id="category" onChange={handlerNewArticle}>
                  <option value="Intelligenza Artificiale">Intelligenza Artificiale</option>
                  <option value="Innovazioni Tecnologiche">Innovazioni Tecnologiche</option>
                  <option value="Software e App">Software e App</option>
                  <option value="Moda e tendenze">Moda e tendenze</option>
                  <option value="Scuola e Istruzione">Scuola e Istruzione</option>
                  <option value="Viaggi e Turismo">Viaggi e Turismo</option>
               </select>
               <button className="btn form-btn" type="submit">Aggiungi Articolo</button>
            </div>
         </form>

         <div className="articles-section">
            <h1>Articoli del blog</h1>
            {articlesList.map((article) => (
               <div key={article.id} className="article">
                  <div className="article-text">
                     <h1>{article.title}</h1>
                     <p>{article.content}</p>
                     <span>{article.category}</span>
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