import axios from 'axios';
import { useState } from 'react';

export default function Chat() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const ask = async () => {
        try {
            const res = await axios.post('http://localhost:5005/ask', { query });
            console.log('Received response:', res.data);
            setResponse(res.data.llmResponse);
        } catch (error) {
            console.error('Error asking question:', error);
            setResponse('Error asking question');
        }
    };
    
    return (
        <div>
            <h1>Ask a Question</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter your question"
            />
            <button onClick={ask}>Ask</button>
            <div>
                <h2>Response:</h2>
                <p>{response}</p>
            </div>
        </div>
    );
}
