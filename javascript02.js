if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
        'hola': function() {
            alert("Hola");
        },
        'reproducir': playVideo,
        'play': playVideo,
        'pausa': pauseVideo,
        'stop': pauseVideo
    };
    // Add our commands to annyang
    annyang.addCommands(commands);
    annyang.setLanguage('es-PE');
    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
}

var vid = document.getElementById("video");

function playVideo() {
    vid.play()
}

function pauseVideo() {
    vid.pause()
}