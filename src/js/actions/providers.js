export function providersAdd(provider) {
    return {
        type: 'PROVIDERS_ADD',
        provider
    };
}

export function providersAddData(provider) {
    return (dispatch) => {
        dispatch(providersAdd(provider));
    };
}
