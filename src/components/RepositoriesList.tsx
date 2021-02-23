import { FC, useState, FormEvent } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState("");

  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const { searchRepositories } = useActions();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {!error && !loading && data.map((name) => <p key={name}>{name}</p>)}
    </div>
  );
};

export default RepositoriesList;
