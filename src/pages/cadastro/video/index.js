import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';

import useForm from '../../../hocks/useForm';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import FormField from '../../../components/FormField';


function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { values, handleChange, clearForm } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault()
    // alert('Video Cadastrado com sucesso !!!');
    const categoriaEscolhida = categorias.find((categoria) => {
      return categoria.titulo === values.categoria
    })
    videosRepository
      .create({
        titulo: values.titulo,
        url: values.url,
        categoriaId: categoriaEscolhida.id,
      })
      .then(() => {
        history.push('/')
        window.alert('Video cadastrado com sucesso!');
      })
  }

  function handleClear(event) {
    event.preventDefault()
    clearForm()
  }


  return (
    <PageDefault>

   <form onSubmit={handleSubmit}>
      <h1>Cadastro de Video</h1>



      {/* <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso!!!1!');

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      > */}


        <FormField
          id="titulo"
          label="Título do Vídeo"
          name="titulo"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          id="url"
          label="Link do video"
          name="url"
          type="text"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          id="categoria"
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

<ButtonCategory>
        <Button type="submit" className="btn-salvar">Confirmar</Button>
        <Button className="btn-limpar" onClick={handleClear}>Limpar</Button>
        <Button className="btn-cad" type="button"><Link to="/cadastro/categoria" > Ir para cadastro de categoria </Link></Button>
        <Button className="btn-home" type="button"><Link to="/"> Voltar para home </Link></Button>
        
</ButtonCategory>

      </form>

      

      {/* <Link to="/cadastro/categoria">
        
      </Link> */}
      {/* <ToastContainer /> */}

    </PageDefault>
  );
}

export default CadastroVideo;


const ButtonCategory = styled.div`
  .btn-salvar {
    background: var(--primary);
    width: 180px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
  .btn-limpar {
    background: var(--blackLighter);
    width: 180px;
    height: 54px;
    border: none;
    margin: 5px 15px 20px 0;
  }
  .btn-home {
    margin-left: 15px;
  }
  .btn-home {
    
  }
 
`