import {useState} from 'react'

export default function App() {
    const [query, setQuery] = useState("")
    return (
        <>
        <input type="text" onChange={(e) => setQuery(e.target.value)}/>
        <h1>{query}</h1>
        </>
    )
}
