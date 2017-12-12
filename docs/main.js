import * as examples from './partials/examples'
import LangSwitcher from './LangSwitcher'

import './docs.scss'

const SL = ', 100%, 85%'
let sections

function calculateNavPositions () {
    sections = Array
        .from(document.querySelectorAll('[data-section]'))
        .map(section => {
            return {
                id: section.id,
                offset: section.getBoundingClientRect().top + window.pageYOffset - 50
            }
        })
}

/* eslint-disable no-new */
const scrollControl = {
    currentPosition: '',
    adjustNav () {
        this.isNavSticky = window.scrollY > window.innerHeight
        const sideNav = document.querySelector('.side-nav')
        if (this.isNavSticky) {
            if (!/ list--sticky/.test(sideNav.className)) {
                sideNav.className += ' list--sticky'
            }
        } else {
            sideNav.className = sideNav.className.replace(/list--sticky/g, '');
        }
        if (!sections) calculateNavPositions()
        for (let i = sections.length - 1; i >= 0; i--) {
            if (window.scrollY > sections[i].offset) {
                this.currentPosition = sections[i].id
                break
            }
        }
    },
    methods: {
        selectLanguage (lang) {
            this.markupLanguage = lang
        },

        onTagging (newTag) {
            this.source.push({ name: newTag, language: newTag })
            this.value.push({ name: newTag, language: newTag })
        }
    }
}

window.addEventListener('load', () => {
    scrollControl.adjustNav()
    window.addEventListener('scroll', scrollControl.adjustNav)
    setTimeout(function () {
        calculateNavPositions()
    }, 1000)
})