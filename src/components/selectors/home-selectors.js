
const GetHomePageSliderFirst = (state) => {
    return state.homepageReducer.sliderArr
};
const GetHomePageSliderSecond = (state) => {
    return state.homepageReducer.sliderSecond
};


export {GetHomePageSliderFirst, GetHomePageSliderSecond};