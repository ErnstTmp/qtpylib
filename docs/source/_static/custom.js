window.onload=function(){
if (window.location.href.indexOf('en/latest') !== -1) return

// add the place holder
$('.wy-side-scroll').after('<div id="side-ext"></div>');
$('#side-ext').append('<a target="_new" href="https://raw.githubusercontent.com/ranaroussi/qtpylib/master/docs/build/epub/QTPyLib.epub" class="fa fa-book">ePub</a>');
$('#side-ext').append(' &nbsp; || &nbsp; ');
$('#side-ext').append('<a target="_new" href="https://github.com/ranaroussi/qtpylib" class="fa fa-github">GitHub</a>');
$('#side-ext').append(' &nbsp;|&nbsp; ');
$('#side-ext').append('<a target="_new" href="https://twitter.com/aroussi" class="fa fa-twitter">Twitter</a>');
}