import { useState } from 'react';

const articles = [
   {
      id: 1,
      text: "Oggi si è registrato un record storico di temperature in Europa, con 20 gradi sopra la media stagionale."
   },
   {
      id: 2,
      text: "Un nuovo studio scientifico rivela che l'intelligenza artificiale potrebbe rivoluzionare la diagnosi delle malattie rare."
   },
   {
      id: 3,
      text: "La NASA ha annunciato il lancio di una nuova missione verso Marte per cercare tracce di vita passata."
   }
];

function Form() {

   const [articlesList, setArticlesList] = useState(articles);
   const [newArticle, setNewArticle] = useState({ text: '' })

   const handlerSubmit = (e) => {
      e.preventDefault();
      const newArticlesList = [newArticle, ...articlesList]
      setArticlesList(newArticlesList)
   }
   const handlerNewArticle = (e) => {
      const newArticle = {
         id: Date.now(),
         text: e.target.value
      }
      setNewArticle(newArticle);
   }
   const handlerRemoveArticle = (id) => {
      const updatedArticleList = articlesList.filter(article => (article.id !== id))
      setArticlesList(updatedArticleList)
   }

   return (
      <div className="container form-container">
         <form action="" onSubmit={handlerSubmit}>
            <input
               type="text"
               placeholder="Inserisci il testo dell'articolo"
               value={newArticle.text}
               onChange={handlerNewArticle}
               required />
            <button className="btn" type="submit">Genera</button>
         </form>

         <div className="articles-section">
            {articlesList.map((article) => (
               <div key={article.id} className="article">
                  <div className="article-text">
                     <p>{article.text}</p>
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