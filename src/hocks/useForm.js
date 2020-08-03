import  { useState } from 'react';

function useForm(valoresIniciais) {

    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        // pegas valores pra nome/chave
        setValues({
            ...values,
            [chave]: valor, //nome: 'valor'
        });
    };

    function handleChange(event) {
        // console.log(">>>>>>>>>>>>>>>>> nomeDaCategoria: ", nomeDaCategoria);
        // console.log(">>>>>>>>>>>>>>>>> Informações de evento: ", e.target.value);
        // setValues(e.target.value);

        // setValue(
        //     event.target.getAttribute('name'),
        //     event.target.value
        // );
        const { name, value } = event.target;
        setValue(
            name,
            value
        );
    };

    function clearForm (){
        setValues(valoresIniciais)
    };

    return {
        values,
        handleChange,
        clearForm,
    };

}

export default useForm;