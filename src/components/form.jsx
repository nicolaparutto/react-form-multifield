import { useState } from "react";

function Form() {

   const defaultPost = {
      title: '',
      image: '',
      content: '',
      category: '',
      tags: [],
      state: false
   }

   const [postData, setPostData] = useState(defaultPost)

   const handlerNewPost = (e) => {
      setPostData({
         ...postData,
         [e.target.name]: e.target.value
      })
      console.log(postData)
   }

   return (
      <section className="container">
         <div className="form-container">
            <h1>Aggiungi un nuovo post...</h1>
            <form action="">
               <div>
                  <h3>Titolo del post:</h3>
                  <input
                     type="text"
                     placeholder="Titolo..."
                     id="title"
                     name="title"
                     value={postData.title}
                     onChange={handlerNewPost}
                  />
               </div>
               <div>
                  <h3>Contenuto del post:</h3>
                  <textarea
                     placeholder="Contenuto..."
                     id="content"
                     name="content"
                     value={postData.content}
                     onChange={handlerNewPost}
                  />
               </div>
               <div>
                  <h3>Immagine del post:</h3>
                  <input
                     type="text"
                     placeholder="Inserisci un URL immagine..."
                     id="image"
                     name="image"
                     value={postData.image}
                     onChange={handlerNewPost}
                  />
               </div>
               <div>
                  <h3>Categoria:</h3>
                  <select name="" id="">
                     <option value="">Scegli una categoria</option>
                     <option value="">Opzione 1</option>
                     <option value="">Opzione 2</option>
                     <option value="">Opzione 3</option>
                  </select>
               </div>
               <div className="form-tags">
                  <h3>Tags:</h3>
                  <input type="checkbox" />
                  <label htmlFor="">HTML</label>
                  <input type="checkbox" />
                  <label htmlFor="">CSS</label>
                  <input type="checkbox" />
                  <label htmlFor="">JavaScript</label>
                  <input type="checkbox" />
                  <label htmlFor="">React</label>
                  <input type="checkbox" />
                  <label htmlFor="">NodeJS</label>
               </div>
               <div className="form-state">
                  <h3>Stato:</h3>
                  <input type="checkbox" />
                  <label htmlFor="">Pubblicato</label>
               </div>
               <button className="btn">Genera</button>
            </form>
         </div>

         <div className="posts-container">
            <h1>Posts del blog:</h1>
            <div className="post">
               <div className="post-img">
                  <img src="" alt="immagine" />
               </div>
               <div className="post-text">
                  <h3>Titolo</h3>
                  <p>Contenuto....</p>
               </div>
               <div className="post-rest">
                  <div>
                     <p>Tags</p>
                  </div>
                  <div>
                     <h4>Pubblicato</h4>
                  </div>
               </div>
               <div className="post-trash">
                  <i className="fa-solid fa-trash"></i>
               </div>
            </div>
         </div>
      </section>

   )
}

export default Form