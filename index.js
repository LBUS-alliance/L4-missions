const fits = {
    'caracal-t1': caracal_t1,
    'caracal-t2': caracal_t2,
    'caracal-t2-heavies': caracal_t2_heavies,
    'osprey-t2': osprey_t2
};

const copyFit = id => {
    var text = fits[id];
    navigator.clipboard.writeText(text);

    $(`#tooltip-${id}`).html('Copied!');
};
const tooltipHoverIn = id => () => {
    let top = document.getElementById(`copy-${id}`).getBoundingClientRect().top - document.body.getBoundingClientRect().top - 32;
    let left = document.getElementById(`copy-${id}`).getBoundingClientRect().left - 50;
    $(`#tooltip-${id}`).css({ top: top, left: left, position: 'absolute' });
    $(`#tooltip-${id}`).show();
};
const tooltipHoverOut = id => () => {
    $(`#tooltip-${id}`).html('Copy to clipboard');
    $(`#tooltip-${id}`).hide();
}

const toggleColorMode = () => {
    // replace CSS file
    const oldCSS = document.getElementsByTagName("link").item(0);
    const oldFile = oldCSS.href.split("/").slice(-1)[0];
    var newCSS = document.createElement("link");
    newCSS.setAttribute("rel", "stylesheet");
    newCSS.setAttribute("type", "text/css");
    newCSS.setAttribute("href", oldFile === "styles_dark.css" ? "styles_light.css" : "styles_dark.css");
    document.getElementsByTagName("head").item(0).replaceChild(newCSS, oldCSS);

    // toggle color-mode icon
    $('#color-mode').html(`<img src="imgs/${oldFile === 'styles_dark.css' ? 'sun' : 'moon'}.svg"/>`);

    // toggle clipboard icons
    $('.clipboard').attr('src', oldFile === 'styles_dark.css' ? 'imgs/clipboard-dark.svg' : 'imgs/clipboard-light.svg');
};

(() => {
    $('#tooltip-caracal-t1').hide();
    $('#tooltip-caracal-t2').hide();
    $('#tooltip-caracal-t2-heavies').hide();
    $('#tooltip-osprey-t2').hide();

    $('#copy-caracal-t1').hover(tooltipHoverIn('caracal-t1'), tooltipHoverOut('caracal-t1'));
    $('#copy-caracal-t2').hover(tooltipHoverIn('caracal-t2'), tooltipHoverOut('caracal-t2'));
    $('#copy-caracal-t2-heavies').hover(tooltipHoverIn('caracal-t2-heavies'), tooltipHoverOut('caracal-t2-heavies'));
    $('#copy-osprey-t2').hover(tooltipHoverIn('osprey-t2'), tooltipHoverOut('osprey-t2'));

    for (const fit in fits) {
        let fit_html = '';
        for (const line of fits[fit].split("\n")) {
            fit_html += line + '<br>';
        }
        $(`#${fit}`).html(fit_html);
    }
})();
