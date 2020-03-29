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
    else id = textToNumber(tag.replace(/ /g, ""))

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

c.map((rc, i) => {
    n.push(arr2[i + 1])
    d.map((dc, j) => {
        n.push(rc + dc)
    })
});
c.map((rc, i) => {
    d.map((dc, j) => {
        copy_n.push(rc + dc)
    })
});
let m = [...n];
b.map((rb, i) => {
    m.push(f[i])
    n.map((rn, j) => {
        m.push(rb + rn);
    });
});
console.log(m)
    //n->1-99
    //copy_n->1-99 except 20-30-40 ...


//let o = [...c]
/*
n.push(arr2[0])
a.map((f, index) => {
    n.push(f)
});*/

//console.log(n)
/*
    o.map((f, index) => {
        n.push(arr2[index + 1])
        d.map((g, j) => {
            n.push(f + g)
        })
    });
    n.push(otxt[2])
    d.map(z => {
        n.push(b[0] + z)
    });
    n.push(b[0] + arr2[0])

    for (let index = 0; index < b.length; index++) {
        let element = b[index];
        a.map(z => {
            n.push(element + z)
        });
        var cont = 0;
        for (let key in c) {
            n.push(element + arr2[cont + 1])
            var co = 1;
            d.map((r, y, d) => {
                n.push(element + c[key] + r);
                if (d.length == (co)) {
                    e.map((re, j, e) => {
                        n.push(b[index + 1] + re);

                    });
                }
                co++;
                //console.log(element + c[key] + r)
                //console.log(d.length)
                //console.log(index)
            });
         
cont++;
}

} */
/*a.map(z => {
             n.push(element + z)
         });*/

/*
b.map((v, index) => {
    //n.push(b[index + 1])
    a.map(z => {
        n.push(v + z)
    });
    n.push(v + arr2[index]);
    console.log(v + arr2[index])
    d.map((z, index) => {
        n.push(v + c[index] + z)

    });
});*/

/*
b.map((v, index) => {
    //n.push(b[index + 1])
    a.map(z => {
        n.push(v + z)
    });
});*/
/*b.map(v => {
    c.map(z => {
        d.map(y => {
            n.push(v + z + y)
        })
    });
});*/



/*
let ac = []
ac = d.concat(arr2.concat(a))
ac = addS()
console.log(ac)
let m = []
m = addM(otxt[1]);
//console.log(m)
let ma = []
m.map(x => {
    ac.map(y => {
        ma.push(x + y)
    })
});
ma.concat(ac)
ma.concat(m)
    //console.log(ma)
*/
function textToNumber(number) { //docientos //cientouno
    return ac.find(val => (val === number));
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