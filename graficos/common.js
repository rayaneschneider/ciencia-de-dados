const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(ducument.body)
    return bodyStyles.getPropertyValue(variavel)
}

const tickConfig = { 
    familiy: getCSS(' ---font'),
    size:16,
    color: getCSS('--primary-color')
}

export {getCSS, tickConfig}