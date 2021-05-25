const classDecider = screenDimensions => {
    if (screenDimensions.width < 600) {
        return "one-row";
    }
    return "three-rows";
};

export default classDecider;