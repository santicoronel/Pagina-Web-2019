textToHTML = text => {
    let template = document.createElement('template');
    template.innerHTML = text.trim();
    return template.content.firstChild;
}
