//import './App.css';
import MenuSuperior from './components/MenuSuperior';
import InclusaoLivros from './components/InclusaoLivros';
import {Routes,Route} from 'react-router-dom';
import ManutencaoLivros from './components/ManutencaoLivros';
import ResumoLivros from './components/ResumoLivros';
import InclusaoAutores from './components/InclusaoAutores';
import InclusaoEditoras from './components/InclusaoEditoras';
import TabelaAutores from './components/TabelaAutores';
import TabelaEditoras from './components/TabelaEditoras';
const App = () => {
  return(  //tudo que vai aqui no return é o que aparece na aplicação
    <>
      <MenuSuperior/>
      <Routes>
        <Route path="/" element={<InclusaoLivros/>}/>
        <Route path="/manutencao" element={<ManutencaoLivros/>}/>
        <Route path="/resumo" element={<ResumoLivros/>}/>
        <Route path="/Autores" element={<InclusaoAutores/>}/>
        <Route path="/editoras" element={<InclusaoEditoras/>}/>
        <Route path="/TabelaAutores" element={<TabelaAutores/>}/>
        <Route path="/TabelaEditoras" element={<TabelaEditoras/>}/>
      </Routes>
    </>
  )
}
//Serão criados 2 componentes para essa aplicação
//MenuSuperior.js
//InclusaoLivros.js
export default App;
