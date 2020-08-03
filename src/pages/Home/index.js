import React, { useEffect, useState } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import styled from 'styled-components';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import categoriasRepository from '../../repositories/categorias';
// import Menu from '../../components/Menu';
// import Footer from '../../components/Footer';
// import dadosIniciais from '../../data/dados_iniciais.json';


function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {

    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        // console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, []);


  return (
    <PageDefault paddingAll={0} >

      {dadosIniciais.length === 0 && (
      <Div>
           <PacmanLoader size={25} color={'#5DD0DF'} />
      </Div>)}

      {dadosIniciais.map((categorias, indice) => {
        if (indice === 0) {
          return (
            <div key={categorias.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].decricao}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categorias.id}
            category={categorias}
          />
        );
      })}



      {/* {JSON.stringify(dadosIniciais)}; */}
      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />      
      <Carousel
        category={dadosIniciais.categorias[3]}
      />      
      <Carousel
        category={dadosIniciais.categorias[4]}
      />      
      <Carousel
        category={dadosIniciais.categorias[5]}
      />           */}


    </PageDefault>
  );
}
export default Home;

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  height: 50vh;
  align-items: center;
`