const numberFormat = (number) => {
    return new Intl.NumberFormat('en-US').format(number)
}


const handleError = (message) => {
    if (typeof message === 'object') {
        const errors = []
        Object.keys(message).map(key => {
            message[key].map(e => {
                errors.push(e)
            })
        })

        return errors.join()
    }
    return message
}



export { numberFormat, handleError }