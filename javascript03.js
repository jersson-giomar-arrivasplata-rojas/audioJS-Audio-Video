if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
        'hola': function() {
            alert("Hola");
        },
        'ver :tag': getProduct
    };
    // Add our commands to annyang
    annyang.addCommands(commands);
    annyang.setLanguage('es-PE');
    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
}

function getProduct(tag) {
    //numberText_id = 1;
    let id;
    if (typeof parseInt(tag) != "NaN") id = parseInt(tag) //numberToText(parseInt(tag))
    else id = textToNumber(tag)

    $.get(`https://snapstore.devinnovaperu.com/api/store_product/${id}/get`, function(data) {
        var product = JSON.parse(data)[0];
        $('#add').empty()
        $('#add').append('<ul>' +
            '<li>Name: ' + product.name + '</li>' +
            '<li>Imagen: <img src="' + product.image + '" width="60px" height="60px"/></li>' +
            '</ul>');
    });
}
let num;
let arr = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce",
    "quince", "veinte", "treinta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa", "cien", "docientos", "trecientos", "cuatrocientos",
    "quinientos", "seicientos", "setecientos", "ochocientos", "novecientos", "mil"
]
let arrtxt = ["dieci", "veinti", "treintai", "cuarentai", "cincuentai", "sesentai", "setentai", "ochentai", "noventai", "ciento"]

function textToNumber(number) { //docientos //cientouno

    for (let index = 0; index < 16; index++)
        if (number == arr[(index + 1)]) num = (index + 1)

    for (let index = 0; index < 4; index++)
        if (number == arrtxt[0].concat(arr[(index + 6)])) num = (16 + index)

    for (let i = 0; i < 8; i++)
        for (let j = 0; j < 9; j++)
            if (number == arrtxt[(i + 1)].concat(arr[j + 1])) num = parseInt(((i + 2).toString()).concat((j + 1).toString()))

    for (let index = 0; index < 8; index++)
        if (number == arr[(index + 16)]) num = ((index + 2) * 10)

        //cientouno



        /*for (let i = 0; i < 8; i++) //24
            for (let j = 0; j < 9; j++)
            if (number == arrtxt[(i + 1)].concat(arr[j + 1])) num = parseInt(((i + 2).toString()).concat((j + 1).toString()))*/

    return num;
}