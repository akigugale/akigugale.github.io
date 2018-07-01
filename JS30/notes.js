/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
var getParams = function (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};


function display_notes(markdown) {
    console.log(markdown);
    var text = markdown,
        target = document.getElementById("notes"),
        converter = new showdown.Converter();
    converter.setFlavor("github");
    var html = converter.makeHtml(text);

    target.innerHTML = html;
}

window.addEventListener("load", function() {
    var offset = 0,
        xhttp = new XMLHttpRequest(),
        data = getParams(window.location.href);
    console.log("day"+data.day+"/learnt.md");
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            display_notes(this.responseText);
        }
        else if (this.readyState == 4 && this.status == 404)
        {
            window.location = "404.html";
        }
    };
    xhttp.open("GET", "day"+data.day+"/learnt.md", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
});


console.log(window.location.href);
x = getParams(window.location.href);
console.log(x.day);
