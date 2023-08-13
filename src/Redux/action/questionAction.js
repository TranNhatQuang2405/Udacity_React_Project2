export const fetchAllQuestion = (data) => {
    return {
        type: "FETCH_ALL_QUESTION",
        data: data
    };
};

export const preFetchAllQuestion = () => {
    return {
        type: "PRE_FETCH_ALL_QUESTION"
    };
};