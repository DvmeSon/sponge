/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './website/templates/**/*.html',
        './website/static/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                'spongebob-yellow': '#FED41D',
                'spongebob-brown': '#A76E06',
                'ocean-blue': '#1CA3EC'
            },
            fontFamily: {
                'lato': ['Lato', 'sans-serif'],

                'cartoon': ['Comic Sans MS', 'cursive']
            }
        }
    },
    plugins: []
}
