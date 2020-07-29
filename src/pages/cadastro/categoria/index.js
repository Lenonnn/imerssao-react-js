import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom'
import '../cadastro.css';
import { FiArrowLeft } from 'react-icons/fi';

function CadastroCategoria() {
    return (
        <PageDefault>
  
            <h1> Cadastro de Gategoria </h1>
            
                <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#84c2f5" /> 
                Home
                </Link>
                <div className="cadastro-container">
                <form>

                    <input type="text"
                        placeholder="Nome da categoria" />

                    <input type="text"
                        placeholder="Titulo" />

                    <textarea placeholder="Descrição" />


                    <button>
                        Cadastrar
                    </button>

                </form>

            </div>
        </PageDefault>
    )
}

export default CadastroCategoria;

