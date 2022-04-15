
const baseUrl = process.env.REACT_APP_BACK_URL

export const fetchSinToken = async (endpoint, payload, method = "GET") => {

    const url = `${baseUrl}${endpoint}`;

    if (method === "GET") {
        const response = await fetch(url)
        
        // const body = await response.json()
        return response
    } else {

        const init = {
            method: method,
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(url, init)

        return response
    }
}


export const fetchConToken = (endpoint, data, method = "GET") => {

    const url = `${baseUrl}${endpoint}`//localhost:400/api/auth(event)
    const token = localStorage.getItem("token") || ""

    if (method === "GET") {
        return fetch(url, {
            method,
            headers: {
                "Content-type": "application/json",
                "x-token": token
            }
        })
    } if (method === "DELETE") {
        //Ojo tener enc uentra el json() 
        // const body = await response.json()
        return fetch(url, {
            method: "DELETE",
            headers: {
                "Accept": "*/*",
                "x-token": token
            }
        })
    } else {

        return fetch(url, {
            method,
            headers: {
                "Content-type": "application/json",
                "x-token": token
            },
            body: JSON.stringify(data)
        })

    }


}

