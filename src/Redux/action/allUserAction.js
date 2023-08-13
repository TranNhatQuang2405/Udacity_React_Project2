export const fetchAllUser = (data) => {
    return {
        type: "FETCH_ALL_USER",
        data: data
    };
};

export const preFetchAllUser = () => {
    return {
        type: "PRE_FETCH_ALL_USER"
    };
};