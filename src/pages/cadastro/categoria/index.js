import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom'
import '../cadastro.css';
import FormField from '../../../components/FormField';
// import { FiArrowLeft } from 'react-icons/fi';



function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    //let nomeDaCategoria = useState('Filmes');
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
        // pegas valores pra nome/chave
        setValues({
            ...values,
            [chave]: valor, //nome: 'valor'
        })
    }

    function handleChange(e) {
        // console.log(">>>>>>>>>>>>>>>>> nomeDaCategoria: ", nomeDaCategoria);
        // console.log(">>>>>>>>>>>>>>>>> Informações de evento: ", e.target.value);
        // setValues(e.target.value);

        setValue(
            e.target.getAttribute('name'), 
            e.target.value
            );
        // const { getAttribute, value } = e.target;
        // setValue(
        //     getAttribute('name'),
        //     value
        // );
    }

    return (
        <PageDefault>

            <h1> Cadastro de Categoria : {values.nome}</h1>

            <Link className="back-link" to="/">
                {/* <FiArrowLeft size={16} color="#84c2f5" />  */}
                Home
                </Link>

            <form onSubmit={function handleSubmit(e) {
                e.preventDefault();
                // console.log("Você tentoou enviar o fomr né?");
                setCategorias([
                    // os 3  pontinhos vai manter todos os arquivos da lista categoria,e permitir a inserção de novos
                    ...categorias,
                    values
                ]);
                setValues(valoresIniciais);
            }}>

                <FormField
                    label="Nome da categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textArea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                
                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                {/* <div>
                    <label>
                        Descrição
                        <textarea 
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange} 
                            />
                    </label>
                </div> */}

                <div>
                    <button>
                        Cadastrar
                    </button>
                </div>

            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

        </PageDefault>
    )
}
export default CadastroCategoria;

