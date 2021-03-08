var counter = 0

var app = {
    div: {
        // text:`ciao amico`,
        width: '50px',
        height: '50px',
        backgroundColor: '#007bff',
        // color: "#fff"
    },
    p: 'hola amigo',
    h1: 'blah',
    button: 'Hola'
}

function count() {
    counter = counter + 1
}

const application = new Kode('body')

application.render(app)