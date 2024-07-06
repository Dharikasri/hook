import React, { useState, useEffect } from 'react';

function DocumentTitleUpdater() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]); // Dependency array with 'count' ensures effect runs whenever 'count' changes

    return (
        <div>
            <h2>Document Title Updater</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

export default DocumentTitleUpdater;
