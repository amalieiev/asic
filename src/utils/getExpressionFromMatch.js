export function $getExpressionFromMatch(match) {
    const startRe = /\{\{/
    const endRe = /\}\}/

    return match
        .replace(startRe, '')
        .replace(endRe, '')
        .trim()
}
