

const getHeaders = (data) => {
    const options = {
        method: 'POST', 
        headers: {accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify(data)
    };

    return options;
}

export default getHeaders;