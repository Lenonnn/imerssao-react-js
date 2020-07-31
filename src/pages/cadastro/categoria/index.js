import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
// import { FiArrowLeft } from 'react-icons/fi';
// import '../cadastro.css';



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

    useEffect(() => {
        console.log('Alo, teste, BRASIL');

        const URL_TOP = 'https://imerssao-react-js-lenon.herokuapp.com/';
        fetch(URL_TOP)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            });

        // setTimeout(() => {
        //     setCategorias([
        //         ...categorias,
        //         {
        //             "id": 1,
        //             "nome": "Front-end",
        //             "descricao": "Uma categoria",
        //             "cor": "#6bd1ff"
        //         },
        //         {
        //             "id": 2,
        //             "nome": "FullStack",
        //             "descricao": "Uma categoria",
        //             "cor": "#6bd1ff"
        //         },
        //         {
        //             "id": 3,
        //             "nome": "Abap",
        //             "descricao": "Uma categoria",
        //             "cor": "#6bd1ff"
        //         }

        //     ])
        // }, 4 * 1000);

    }, []);

    return (
        <PageDefault>

            <h1> Cadastro de Categoria : {values.nome}</h1>


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
                    type="textarea"
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

                <Button>
                    Cadastrar
                    </Button>

            </form>

            {categorias.length === 0 && (

                <div>
                    {/* Carregando... */}
                Loading...
                </div>

            )}


            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={`${categoria.nome}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link className="back-link" to="/">
                {/* <FiArrowLeft size={16} color="#84c2f5" />  */}
                Home
                </Link>
        </PageDefault>
    )
}
export default CadastroCategoria;

