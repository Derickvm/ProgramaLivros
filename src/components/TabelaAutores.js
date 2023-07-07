import {useForm} from "react-hook-form";
import { useState, useEffect } from "react";
import { api } from "../config_axios";  
import ListaAutores from "./ListaAutores";

const TabelaAutores = () => {
    const {register, handleSubmit, reset} = useForm();
    const [autores, setAutores] = useState([]);

    const obterLista = async () => {
        try{
            const lista = await api.get("autores");
            setAutores(lista.data);
        }catch(error){
            alert(`Erro: ..Não foi possível obter os dados: ${error}`);
        }
    }


//define o método que será executado assim que o componente for renderizado
useEffect(() => {
    obterLista();
},[]);

const filtrarLista = async (campos) => {
    try{
        const lista = await api.get(`autores/filtro/${campos.palavra}`);
        lista.data.length
        ? setAutores(lista.data)
        : alert("Não há Autores cadastrados com a palavra chave pesquisada");
    }catch(error){
        alert(`Erro: ..Não foi possível obter os dados: ${error}`);
    }
}

const excluir = async(id,nome) => {
    if(!window.confirm(`Confirma a exclusão do Autor ${nome}?`)){
        return;
    }
    try{
        await api.delete(`autores/${id}`);
        setAutores(autores.filter(autor => autor.id !== id));
        
    }catch(error){
        alert(`Erro: ..Não foi possível excluir o autor ${nome}: ${error}`);
    }
}

//alterar os registros
const alterar = async (id,nome,index) => {
    const novoAutor = String(prompt(`Digite o novo Nome do Autor ${nome}`));
    if (novoAutor.trim().length === 0) {
        alert('Digite o novo nome do autor')
        return;
    }
    try{//captura os erros 
        //chamando o backend e passando os dados
        await api.put(`autores/${id}`,{nome: novoAutor});
        const autoresAtualizados = [...autores];
        const nomeAutor = autoresAtualizados.findIndex(autor => autor.id === id);
        autoresAtualizados[nomeAutor].nome = novoAutor;
        setAutores(autoresAtualizados);
        obterLista();
    }catch(error){
        alert(`Erro: ..Não foi possível alterar o Autor ${nome}: ${error}`);
    }
}

    return (
       <div className="container">
        <div className="row">
            <div className="col-sm-7">
                <h4 className="fst-italic mt-3">Lista de Autores</h4>
            </div>
            <div className="col-sm-5">
                <form onSubmit={handleSubmit(filtrarLista)}>
                    <div className="input-group mt-3">
                        <input type="text" className="form-control" placeholder="nome ou Autor" required {...register("palavra")} />
                        <input type="submit" className="btn btn-primary" value="Pesquisar" />
                        <input type="button" className="btn btn-danger" value="Todos" onClick={()=>{reset({palavra:""});obterLista();}}/>
                    </div>
                </form>
            </div>
        </div>

        <table className="table table-striped mt-3">
            <thead>
                <tr>
                    <th>Cód.</th>
                    <th>nome</th>
                    <th>sobrenome</th>
                    <th>idade</th>
                    <th>data_nasc</th>
                    <th>sexo</th>
                    <th>telefone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {autores.map((autor) => (
                    <ListaAutores
                        key={autor.id}
                        id={autor.id}
                        nome={autor.nome}
                        sobrenome={autor.sobrenome}
                        idade={autor.idade}
                        data_nasc={autor.data_nasc}
                        sexo={autor.sexo}
                        telefone={autor.telefone}
                        excluirClick={()=>excluir(autor.id,autor.nome)}
                        alterarClick={()=>alterar(autor.id,autor.nome)}
                    />
                ))}
            </tbody>
        </table>

       </div> 
    );
};

export default TabelaAutores;