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
    <div style={{ maxWidth: "560px", margin: "60px auto", fontFamily: "sans-serif" }}>
      <h2>User Search</h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        style={{ width: "100%", padding: "10px", fontSize: "15px" }}
      />

      <ul>
        {results.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
