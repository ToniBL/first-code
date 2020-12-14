// alert("WOWWW");

(function () {
    var canvas = document.getElementById("canvas");
    console.log("canvas");

    var ctx = canvas.getContext("2d");
    console.log(ctx);
    //Kopf
    ctx.beginPath();
    ctx.strokeStyle = "teal";
    ctx.lineWidth = 2;
    ctx.arc(400, 200, 100, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
    //Körper
    ctx.beginPath();
    ctx.strokeStyle = "teal";
    ctx.lineWidth = 2;
    ctx.moveTo(400, 300);
    ctx.lineTo(600, 600);
    ctx.lineTo(200, 600);
    ctx.lineTo(400, 300);
    ctx.stroke();
    ctx.fillStyle = "lightblue";
    ctx.fill();

    // rechtes Bein
    ctx.beginPath();
    ctx.strokeStyle = "teal";
    ctx.lineWidth = 2;
    ctx.moveTo(450, 600);
    ctx.lineTo(450, 750);
    ctx.lineTo(500, 750);
    ctx.stroke();
    //linkes Bein
    ctx.beginPath();
    ctx.strokeStyle = "teal";
    ctx.lineWidth = 2;
    ctx.moveTo(350, 600);
    ctx.lineTo(350, 750);
    ctx.lineTo(300, 750);
    ctx.stroke();
    // rechter Arm
    ctx.beginPath();
    ctx.strokeStyle = "teal";
    ctx.lineWidth = 2;
    ctx.moveTo(465, 400);
    ctx.lineTo(550, 300);
    ctx.stroke();
    // linker Arm
    ctx.beginPath();
    ctx.strokeStyle = "teal";
    ctx.lineWidth = 2;
    ctx.moveTo(250, 400);
    ctx.lineTo(335, 400);
    ctx.stroke();
})();
