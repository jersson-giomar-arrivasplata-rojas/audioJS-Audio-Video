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
    if (!isNaN(parseInt(tag))) id = parseInt(tag) //numberToText(parseInt(tag))
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

let otxt = ["dieci", "mil", "cien"]
let arr2 = ["diez", "veinte", "treinta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa", "cien"]
let b = ["ciento", "docientos", "trecientos", "cuatrocientos", "quinientos", "seicientos", "setecientos", "ochocientos", "novecientos"]
let c = ["veinti", "treintay", "cuarentay", "cincuentay", "sesentay", "setentay", "ochentay", "noventay"]
let d = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
let a = ["once", "doce", "trece", "catorce", "quince", otxt[0].concat(d[6]), otxt[0].concat(d[7]), otxt[0].concat(d[8]), otxt[0].concat(d[9])]

let ac = []
ac = d.concat(arr2.concat(a))
ac = addS()
    //console.log(ac)
let m = []
m = addM(otxt[1]);
//console.log(m)
let ma = []
m.map(x => {
    ac.map(y => {
        ma.push(x + y)
    })
});
console.log(ma)

function textToNumber(number) { //docientos //cientouno
    return ma.find(val => (val === number));
}
//console.log(textToNumber(("mil sesenta y siete").replace(/ /g, "")));
//var t=("mil sesenta y siete").replace(/ /g, "");
//console.log(textToNumber(t))
function addM(txt) {
    let data = [];
    d.map((r, index) => {
        if (index == 0) data.push(txt)
        else data.push(r + txt)
    });
    arr2.map(r => {
        data.push(r + txt)
    });
    b.map(re => {
        arr2.map(r => {
            data.push(re + r + txt)
        });
    });
    return data;
}

function addS() {
    let data = [];

    c.map(x => {
        d.map(y => {
            data.push(x + y)
        })
    });
    b.map(v => {
        a.map(z => {
            data.push(v + z)
        });
    })
    b.map(v => {
        c.map(z => {
            d.map(y => {
                data.push(v + z + y)
            })
        });
    });
    return data;
}