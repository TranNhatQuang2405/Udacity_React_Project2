export const changeLocation = (location) => {
    return {
        type: "CHANGE_LOCATION",
        location: location
    };
};

export const resetLocation = () => {
    return {
        type: "CHANGE_LOCATION",
        location: "/"
    };
};