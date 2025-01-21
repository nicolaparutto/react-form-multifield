import { useEffect, useState } from "react";
import { categories, tags } from "../data/formUtility";


function Form() {

   const defaultPost = {
      title: '',
      image: '',
      content: '',
      category: '',
      tags: [],
      state: false
   }

   const [postData, setPostData] = useState(defaultPost);
   const [postsList, setPostsList] = useState([]);

   const handlerNewPost = (e) => {
      let value = e.target.value;
      if (e.target.name === 'category') {
         value = categories[e.target.value]
      }
      if (e.target.type === 'checkbox') {
         value = e.target.checked
         console.log(value)
      }
      setPostData({
         ...postData,
         [e.target.name]: value
      })
   }

   const handlerAddTag = (e) => {

      let { tags, ...others } = postData;
      if (tags.includes(e.target.value)) {
         tags = tags.filter(tag => tag !== e.target.value)
      } else {
         tags = [...tags, e.target.value]

      }
      setPostData({
         tags,
         ...others
      })
   }

   const handlerSubmit = (e) => {
      e.preventDefault()
      setPostsList([
         { id: self.crypto.randomUUID(), ...postData },
         ...postsList
      ])
   }

   const handlerRemove = (id) => {
      const updatedList = postsList.filter(post => post.id !== id)
      setPostsList(updatedList)
   }

   useEffect(() => {
      //console.log(postData);
   }, [postData]);

   return (
      <section className="container">
         <div className="form-container">
            <h1>Aggiungi un nuovo post...</h1>
            <form action="" onSubmit={handlerSubmit}>
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
                  <select
                     name="category"
                     onChange={handlerNewPost}
                  >
                     <option>Scegli una categoria</option>
                     {categories.map((category, index) => (
                        <option key={index} value={index}>{category}</option>
                     ))}
                  </select>
               </div>
               <div className="form-tags">
                  <h3>Tags:</h3>
                  {tags.map(tag => (
                     <div key={tag.id}>
                        <input
                           type="checkbox"
                           id={tag.id}
                           value={tag.name}
                           onChange={handlerAddTag}
                        />
                        <label htmlFor="">{tag.name}</label>
                     </div>
                  ))}
               </div>
               <div className="form-state">
                  <h3>Stato:</h3>
                  <input
                     type="checkbox"
                     id="state"
                     name="state"
                     checked={FormData.state}
                     onChange={handlerNewPost}
                  />
                  <label htmlFor="">Pubblica Subito</label>
               </div>
               <button className="btn">Genera</button>
            </form>
         </div>

         <div className="posts-container">
            <h1>Posts del blog:</h1>
            {postsList.map(post => (
               <div className="post" key={post.id}>
                  <div className="post-img">
                     <img src={post.image} alt="post-img" />
                  </div>
                  <div className="post-text">
                     <h3>{post.title}</h3>
                     <p>{post.content}</p>
                  </div>
                  <div className="post-rest">
                     <div>
                        <h4>Categorie:</h4>
                        <p>{post.category}</p>
                     </div>
                     <div>
                        <h4>Tags:</h4>
                        <p>{post.tags.join(', ')}</p>
                     </div>
                     <div>
                        <h4>Stato:</h4>
                        <p>{post.state ? "Post pubblico" : "Ancora da pubblicare"}</p>
                     </div>
                  </div>
                  <div className="post-trash" onClick={() => handlerRemove(post.id)} >
                     <i className="fa-solid fa-trash"></i>
                  </div>
               </div>
            ))}
         </div>
      </section >

   )
}

export default Form