import { $getExpressionFromMatch } from './getExpressionFromMatch'
import { $exec } from './exec'

export function $replace(template, data) {
    const re = /\{\{.*?\}\}/g

    return template.replace(re, function (match) {
        let expression = $getExpressionFromMatch(match)

        return $exec(data, expression)
    })
}
