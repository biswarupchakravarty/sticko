// Load Highlight.js Syntax Highlighting
hljs.initHighlightingOnLoad();
$(window).load(function () {
    setTimeout(function () {
        $('img[data-src]').each(function () {
            $(this).attr('src', $(this).data().src);
        });
    }, 0);
});

// Load Google Analytics
$(window).load(function () {
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
        a.async = true;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-13190241-2', 'shiny.co.in');
    ga('send', 'pageview');
});

// Load Disqus/Googel+ Comments
$(window).load(function () {
    if ($('#disqus_thread').size() > 0) {
        setTimeout(function () {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "//shinycoin.disqus.com/embed.js";
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(e)
        }, 1000);
    }

    // Google+ Comments disabled
    return;

    setTimeout(function () {
        var script = document.createElement('script');
        script.src = '//apis.google.com/js/plusone.js?callback=gpcb';
        document.body.appendChild(script);
    }, 10);
});