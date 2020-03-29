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

//https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/








function textToNumber(number) { //docientos //cientouno
    number = (number).replace(/ /g, "")
    console.log(number)
    return (n().findIndex((val, index) => (val === number)) + 1);

}

function n() {
    let otxt = ["dieci", "mil", "cien"]
    let arr2 = ["diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"]
    let b = ["ciento", "docientos", "trecientos", "cuatrocientos", "quinientos", "seicientos", "setecientos", "ochocientos", "novecientos"]
    let c = ["veinti", "treintay", "cuarentay", "cincuentay", "sesentay", "setentay", "ochentay", "noventay"]
    let d = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"]
    let a = ["once", "doce", "trece", "catorce", "quince", otxt[0].concat(d[5]), otxt[0].concat(d[6]), otxt[0].concat(d[7]), otxt[0].concat(d[8])]
    let e = [...d]
    e.push("diez")
    e = e.concat(a)
    let n = [...e] //1-19
    let copy_n = [...e] //1-19
    let f = [...b];
    f[0] = otxt[2]; //100-900
    //console.log(f)
    c.map((rc, i) => {
        n.push(arr2[i + 1])
        d.map((dc, j) => {
            n.push(rc + dc)
        })
    });
    //n->1-99
    c.map((rc, i) => {
        d.map((dc, j) => {
            copy_n.push(rc + dc)
        })
    });
    //copy_n->1-99 except 20-30-40 ..
    let m = [...n];
    b.map((rb, i) => {
        m.push(f[i])
        n.map((rn, j) => {
            m.push(rb + rn);
        });
    });
    //m->1-999
    let o = [...m];
    let p = [...f]
        //console.log(o)
    let k = []
    o.map((ro, j) => {
        k.push(ro + otxt[1])
    });
    k[0] = otxt[1] //1000 2000 3000 ....
    let l = []

    k.map((kr, j) => {
            l.push(kr);
            m.map((mr, i) => {
                l.push(kr + mr);
            })
        })
        //m.push(otxt[1])
    let t = [...m].concat(l)
    console.log(t)
    return t;
}