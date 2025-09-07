

const numberFormat = (number) => {
    return new Intl.NumberFormat('en-US').format(number)
}

export {numberFormat}