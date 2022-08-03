import './styles.css';

const Search = () => {
  return (
    <div className="container">
      <div className="row-fluid">
        <div className="base-card search-container">
          <div className="input-container">
            <input
              className="text-input"
              placeholder="Digite sua busca"
              type="text"
            />
            <button className="btn btn-container">Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
