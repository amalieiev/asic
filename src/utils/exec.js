export function $exec(expression, context) {
    for (let key in context) {
        if (context[key].toUpperCase) {
            Function(`${key} = "${context[key]}"`)()
        } else {
            Function(`${key} = ${context[key]}`)()
        }
    }

    return Function('return ' + expression)()
}

