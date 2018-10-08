export function providersAdd(provider) {
    return {
        type: 'PROVIDERS_ADD',
        provider
    };
}

export function providersRemove(provider) {
    return {
        type: 'PROVIDERS_REMOVE',
        provider
    };
}

export function providersTableToggleRow(rowIndex) {
    return {
        type: 'PROVIDERS_TABLE_TOGGLE_ROW',
        rowIndex
    };
}

export function providersFormUpdate(newProvider) {
    return {
        type: 'PROVIDERS_FORM_UPDATE',
        newProvider
    };
}
