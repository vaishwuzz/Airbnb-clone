// TestRouterComponent.js
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

function TestRouterComponent() {
    return (
        <BrowserRouter>
            <div>
                <h1>Testing React Router DOM</h1>
                <Link to="/example">Go to Example</Link>
            </div>
        </BrowserRouter>
    );
}

export default TestRouterComponent;
