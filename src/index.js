import { Component } from './decorators/Component'
import { $bootstrap } from './utils/bootstrap'

if (window) {
    window.Component = Component
}

$bootstrap()

export {
    Component
}