// 1.
function myFn(sel) {
    var styled = document.querySelectorAll(sel);
    for (var i = 0; i < styled.length; i++) {
        styled[i].style.fontWeight = "bold";
        styled[i].style.fontStyle = "italic";
        styled[i].style.textDecoration = "underline";
        console.log(styled);
    }
}

// 2.
function toArr(str) {
    var realArr = [];
    var likeArr = document.getElementsByClassName(str);
    for (var i = 0; i < likeArr.length; i++) {
        realArr.push(likeArr[i]);
    }
    console.log(realArr);
    return realArr;
}

// 3.
function awesome() {
    var aw = document.createElement("div");
    var text = document.createTextNode("🐱‍🏍AWESOME!");
    aw.appendChild(text);
    document.body.appendChild(aw);

    aw.style.position = "fixed";
    aw.style.zIndex = 2147483647;
    aw.style.left = "20px";
    aw.style.top = "100px";
    aw.style.fontSize = "200px";
}
awesome();
