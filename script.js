window.onresize = setInfo();

function setInfo() {
    let ssize = document.querySelector('#p-ssize');
    let wsize = document.querySelector('#p-wsize');
    let vsize = document.querySelector('#p-vsize');
    let osize = document.querySelector('#p-osize');

    let asize = document.querySelector('#p-asize');
    let cdepth = document.querySelector('#p-cdepth');
    let cres = document.querySelector('#p-cres');
    let oangle = document.querySelector('#p-oangle');

    let style1 = '<span style="font-size: 200%; font-weight: bolder">';
    let style2 = '</span>';

    ssize.innerHTML = '<abbr title="screen.width\ncreen.height">Screen Size<br/>' + style1 + screen.width + 'x' + screen.height + style2 + '</abbr>';
    wsize.innerHTML = '<abbr title="document.documentElement.clientWidth\ndocument.documentElement.clientHeight">Client Size<br/>' + style1 + document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight + style2 + '</abbr>';
    vsize.innerHTML = '<abbr title="window.innerWidth\nwindow.innerHeight">Frame Size<br/>' + style1 + window.innerWidth + 'x' + window.innerHeight + style2 + '</abbr>';
    osize.innerHTML = '<abbr title="window.outerWidth\nwindow.outerHeight">Outer Size<br/>' + style1 + window.outerWidth + 'x' + window.outerHeight + style2 + '</abbr>';

    asize.innerText = screen.availWidth + 'x' + screen.availHeight;
    cdepth.innerText = screen.colorDepth;
    cres.innerText = screen.pixelDepth;
    oangle.innerText = screen.orientation.angle;
}
setInfo();