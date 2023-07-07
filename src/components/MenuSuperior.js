import { Link } from "react-router-dom";

const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">Controle Pessoal de Livros</Link>
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/resumo" className="nav-link">Resumo</Link>
          </li>
        <li className="nav-item">
            <Link to="/editoras" className="nav-link">Editoras</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Inclusão</Link>
          </li>
          <li className="nav-item">
            <Link to="/autores" className="nav-link">Autores</Link>
          </li>
          <li className="nav-item">
            <Link to="/manutencao" className="nav-link">Manutenção</Link>
          </li>
          <li className="nav-item">
            <Link to="/TabelaAutores" className="nav-link">TabelaAutores</Link>
          </li>
          <li className="nav-item">
            <Link to="/TabelaEditoras" className="nav-link">TabelaEditoras</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuSuperior;
