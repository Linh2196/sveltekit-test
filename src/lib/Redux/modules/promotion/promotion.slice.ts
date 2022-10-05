export const initState = {
    data: {
    },
};

export const promotionInfoUpdated = (payload) => ({
    type: "promotion/promotionDataUpdated",
    payload,
});

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "promotion/promotionDataUpdated": {
            return {
                ...state,
                data: {
                    ...action.payload
                },
            };
        }
        default:
            return state;
    }
}

const selectPromotionInfo = (state) => state.promotion.data;

export const selectors = {
    selectPromotionInfo,
}

export const actions = {
    promotionInfoUpdated,
}