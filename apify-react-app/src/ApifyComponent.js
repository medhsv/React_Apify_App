// src/ApifyComponent.js
import React, { useState } from 'react';
import { ApifyClient } from 'apify-client';

const ApifyComponent = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setLoading(true);
        setError('');
        
        const client = new ApifyClient({
            token: 'apify_api_YaPMcnbQB4HTnzRUpWo3PImwqX1MEh4xmQ3E',
        });

        const input = {
            query: query,
            language: 'US:en',
            maxItems: 100,
            extractImages: true,
            proxyConfiguration: {
                useApifyProxy: true,
            },
        };

        try {
            const run = await client.actor('eWUEW5YpCaCBAa0Zs').call(input);
            const { items } = await client.dataset(run.defaultDatasetId).listItems();
            setResults(items);
        } catch (err) {
            setError('Failed to fetch results');
            console.error(err);
        }

        setLoading(false);
    };

    return (
        <div>
            <h1>Apify Search</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter search query"
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? 'Searching...' : 'Search'}
            </button>
            {error && <p>{error}</p>}
            <ul>
                {results.map((item, index) => (
                    <li key={index}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.title}
                        </a>
                        {item.image && <img src={item.image} alt={item.title} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApifyComponent;
