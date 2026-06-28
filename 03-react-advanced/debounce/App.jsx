import React, { useState, useEffect } from "react";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    fetch(`https://dummyjson.com/products/search?q=${debouncedQuery}`)
      .then((res) => res.json())
      .then((data) => setResults(data.products));
  }, [debouncedQuery]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      <ul>
        {results.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
