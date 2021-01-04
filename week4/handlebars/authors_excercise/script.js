(function () {
    //////// DO NOT TOUCH ////////
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    //////// DO NOT TOUCH ////////

    var dataObject = {
        cohorts: [
            {
                name: "Adobo",
                nickname: "Adobians",
                favouriteFoods: ["Pizza", "Sushi", "Chocolate", "Salt"],
                skills: {
                    javascript: true,
                    HTML: 10,
                    dancing: "questionable",
                },
            },
            {
                name: "Jasmine",
                nickname: "Jasminoes",
                favouriteFoods: ["Pasta", "Potatoes", "Sweets"],
                skills: {
                    javascript: true,
                    Vue: 10,
                    dancing: "Amazing",
                },
            },
            {
                name: "Fennel",
                nickname: "Fennelites",
                favouriteFoods: ["Pasta", "Potatoes", "Sweets"],
                skills: {
                    javascript: false,
                    HTML: 1,
                    dancing: "sometimes",
                },
            },
        ],
    };

    // First we grab our empty div, then we set the template as its inner HTML.
    // Then we pass it our data object
    // 'adobo', the name of the template, comes from the template id attribute
    // in the HTML file
    $(".adobo-info").html(Handlebars.templates.adobo(dataObject));
})();
