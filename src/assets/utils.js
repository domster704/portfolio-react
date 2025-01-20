export function clearStyleFromHTML(htmlCode) {
    let divElement = document.createElement('div');
    divElement.innerHTML = htmlCode;
    let elements = divElement.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        elements[i].removeAttribute('style');
    }
    return divElement.innerHTML;
}