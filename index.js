var toggleColorMode = () => {
    const oldCSS = document.getElementsByTagName("link").item(0);
    const oldFile = oldCSS.href.split("/").slice(-1)[0];

    var newCSS = document.createElement("link");
    newCSS.setAttribute("rel", "stylesheet");
    newCSS.setAttribute("type", "text/css");
    newCSS.setAttribute("href", oldFile === "styles_dark.css" ? "styles_light.css" : "styles_dark.css");

    document.getElementsByTagName("head").item(0).replaceChild(newCSS, oldCSS);

    $('#color-mode').html(`<img src="imgs/${oldFile === "styles_dark.css" ? 'sun' : 'moon'}.svg"/>`);
};
