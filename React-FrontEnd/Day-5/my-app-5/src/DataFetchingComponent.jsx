import React, { useEffect, useState } from 'react'

function DataFetchingComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        console.log("Component Rendered!!!!");
        //This function will run after the component renders

        //API call
        fetch(url)
            .then((response) => {
            return response.json();
            })
            .then((data) => {
                setTimeout(() => {
                    setData(data);
                setLoading(false);
                }, 5000)
                
            })
            .catch(error  => {
                console.log("$$$$",error);
                setError(error);
                setLoading(false);
            });
        }, []);
        if(loading) {
            console.log("First loaded!!!")
            return <div>Loading...</div>;
        }

        if(error) {
            return <div>Error: {error.message}</div>;
        }
        return (
            <div>
                <h2>Data Fetching Component</h2>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.username}</li>
                    ))}
                </ul>
                </div>
        )
        }

export default DataFetchingComponent