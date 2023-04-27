//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let host = "http://localhost:8082";

let getAllAvailableItems = () => {
    return fetch(host)
        .then(response => response.json()); 
};

let getItemsByName = (name) => {
    return fetch(host + "/" + name)
        .then(response => response.json());
}

let getItemById = (id) => {
    console.log(host+"/item/"+id)
    return fetch(host + "/item/" + id)
        .then(response =>
        {
            if (response.status == 200 || response.status == 201) {
                 return response.json();
            }
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