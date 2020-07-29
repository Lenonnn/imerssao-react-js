import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiLogIn } from 'react-icons/fi';
import '../cadastro.css';



function CadastroVideo() {
    return (
     <PageDefault>
         <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#84c2f5" /> 
                Voltar
                </Link>

        <h1> Cadastro de video </h1>


        <Link  className="back-link" to="/cadastro/categoria"> 
            <FiLogIn size={16} color="#84c2f5" />
                      
            Cadastrar Categoria
        </Link>

        
     </PageDefault>
     
    )
  }

export default CadastroVideo;