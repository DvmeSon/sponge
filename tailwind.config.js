/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './website/templates/**/*.html',
        './node_modules/flowbite/**/*.js'
    ],
    theme: {
        colors: {
            primary: '#68a92f',
        },
        extend: {
            fontFamily: {
                lato: ['Lato'],
                amatic: ['Amatic SC'],
                montserrat: ['Montserrat']
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ]
}
