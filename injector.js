function injectJQuery(){
    var script = document.createElement('script');
    script.src = 'http://code.jquery.com/jquery-1.11.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

function injectJQueryS(){
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-1.11.1.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

function injectIFrame(url){
    var iframe = document.createElement('iframe');
    iframe.src = url;
    document.getElementsByTagName('body')[0].appendChild(iframe);
}

function injectCSP(){
    var meta = document.createElement('meta');
//     <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self'"/>
    meta.httpEquiv = "Content-Security-Policy";
//     meta.content="default-src *; style-src 'self'; script-src 'self'; img-src 'self'; connect-src 'self'; object-src 'self'";
    meta.content="default-src 'none'; style-src 'self' https; script-src 'self' https; connect-src 'self' https; img-src 'self' https;";
    document.getElementsByTagName('head')[0].appendChild(meta);
}

function injectXFrame(){
    var meta = document.createElement('meta');
//     <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self'"/>
    meta.httpEquiv = "Content-Security-Policy";
//     meta.content="default-src *; style-src 'self'; script-src 'self'; img-src 'self'; connect-src 'self'; object-src 'self'";
    meta.content="default-src 'none'; style-src 'self' https; script-src 'self' https; connect-src 'self' https; img-src 'self' https;";
    document.getElementsByTagName('head')[0].appendChild(meta);
}
