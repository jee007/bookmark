(function() {
    function loadScript(src, callback) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = callback;
        document.body.appendChild(script);
    }

    function runScripts() {
        loadScript('https://jee007.github.io/IB_ASN_PB_Details/psboxes.js', function() {
            console.log('First loaded ' + new Date());
            loadScript('https://jee007.github.io/IB_ASN_PB_Details/myasnscript.js', function() {
                console.log('Second loaded ' + new Date());
                loadScript('https://jee007.github.io/IB_ASN_PB_Details/wh_asn.js', function() {
                    console.log('Third loaded ' + new Date());
                });
            });
        });
    }

    runScripts();
    setInterval(runScripts, 1800000); // Reload every 30 minutes
})();
