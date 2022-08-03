import './styles.css';

const Search = () => {
  return (
    <div className="base-card search-container">
      <div className="input-contaniner">
        <input
          className="text-input"
          placeholder="Digite sua busca"
          type="text"
        />
        <button className="btn btn-container">Buscar</button>
      </div>
    </div>
  );
};

export default Search;
