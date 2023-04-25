//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let host = "http://localhost:8080";

let getAllAvailableItems = () => {
    return fetch(host)
        .then(response => response.json()); 
};

let getItemsByName = (name) => {
    return fetch(host + "/" + name)
        .then(response => response.json());
}

let getItemById = (id) => {
    return fetch(host + "/" + id)
        .then(response =>
        {
            if (response.status == 200 || response.status == 201) return response.json();
            return null;
        })
            .then(id => id)
            .catch(error => {
                console.log(error);
                return null;
        });
}

let viewingdata = {
    allItems: getAllAvailableItems,
    itemsByName: getItemsByName,
    itemById: getItemById
};

export default viewingdata;