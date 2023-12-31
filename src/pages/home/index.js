import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../home/home.css';
import condominio1 from './../../assets/img/condo1.png';
import condominio2 from './../../assets/img/condo1 - Copia.png';

function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const getPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseClick = () => {
    setSelectedPost(null); 
  };

  return (
    <>
      <Header />
      <br/><br/>
        <div className="margem">
          <div className="caixa_geral">
            <h2>Aprecie nossos apartamentos!</h2>
            <img src={condominio1} width="500" className="maps"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime modi possimus minus
            magni neque maiores mollitia veniam, perferendis iure commodi aperiam fugiat nemo unde iste deleniti
            deserunt nostrum quaeLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime
            modi possimus minus
            magni neque maiores mollitia veniam, perferendis iure commodi aperiam fugiat nemo unde iste deleniti
            deserunt nostrum quaeLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime
            modi possimus minus
            magni neque maiores mollitia veniam, perferendis iure commodi aperiam fugiat nemo unde iste deleniti
            deserunt nostrum quae.</p>
          </div>
        <br/><br/><br/>
          <div className="caixa_geral">
            <h2>O melhor para você</h2>
            <img src={condominio2} width="500" class="maps"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime modi possimus minus
            magni neque maiores mollitia veniam, perferendis iure commodi aperiam fugiat nemo unde iste deleniti
            deserunt nostrum quaeLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime
            modi possimus minus
            magni neque maiores mollitia veniam, perferendis iure commodi aperiam fugiat nemo unde iste deleniti
            deserunt nostrum quaeLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium maxime
            modi possimus minus
            magni neque maiores mollitia veniam, perferendis iure commodi aperiam fugiat nemo unde iste deleniti
            deserunt nostrum quae.</p>
          </div>
          
          <div className="caixa_geral">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit sunt dolorem dolorum
              autem, eligendi animi iste amet eveniet obcaecati molestias provident illo facilis nobis
              magnam excepturi fuga. Ex, ut.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit sunt dolorem dolorum
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit sunt dolorem dolorum</p>
            <br/><br/><br/>
            <h2>Novidades!</h2>
            <br/>
            <h3>Faça seu cadastro, ou entre em contato com a nossa equipe!</h3>
            <p className="nov"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit sunt dolorem dolorum
                autem, eligendi animi istes amet eveniet obcaecati molestias provident illo facilis nobis
                magnam excepturi fuga. Ex, ut.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit sunt dolorem dolorum
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit sunt dolorem dolorum  
            </p>
            
            <form>
            </form>
          </div>
				</div>
      <div className="margem">
        <div className="caixa_geral2">
          <h1>Comentários de clientes</h1>
          {posts.length === 0 ? (
            <p>carregando...</p>
          ) : (
            posts.map((post) => (
              <div className="post" key={post.id}>
                <h3>TÍTULO: {post.title}</h3>
                <h4>COMENTÁRIO: {post.body}</h4>
                <button onClick={() => handlePostClick(post)} className="btn">Ler mais</button>
              </div>
            ))
          )}
        </div>
        {selectedPost && (
          <div>
            <div className="post-details">
              <h2>Título: {selectedPost.title}</h2>
              <h3>Comentário: {selectedPost.body}</h3>
              <button onClick={handleCloseClick} className="btn">Fechar</button>
            </div>
          </div>
        )}
      </div>
      <br /><br /><br />
      <Footer />
    </>
  );
}

export default Home;
