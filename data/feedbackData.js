
let host = "http://localhost:8081/feedback";

let getAllAvailableFeedback = () => {
    return fetch(host)
        .then(response => response.json());
}

let getFeedbackById = (id) => {
    return fetch(host + "/" + id)
        .then(response => response.json());
}

let saveFeedback = (feedback) => {
    return fetch(host + "/create", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            feedbackSellerId: feedback.feedbackSellerId,
            rating: feedback.rating
        })
    }).then(response =>
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

let feedbackData = {
    allFeedback: getAllAvailableFeedback,
    feedbackById: getFeedbackById,
    saveFeedback: saveFeedback
}

export default feedbackData;