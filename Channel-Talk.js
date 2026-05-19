(function() {
    var w = window; if (w.ChannelIO) return;
    var ch = function() { ch.c(arguments); }; ch.q = []; ch.c = function(args) { ch.q.push(args); }; w.ChannelIO = ch;
    function l() {
        if (w.ChannelIOInitialized) return; w.ChannelIOInitialized = true;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') l(); else { w.addEventListener('load', l); }
})();

// ページ読み込み完了時に自動でチャットを初期化
window.addEventListener('load', function() {
    chInitTalk();
});

function chInitTalk() {
    ChannelIO('boot', { "pluginKey": 'f06bb3b5-5394-4b24-b902-03d4110cfddd' }, () => initMobileChatButton());
}

function initMobileChatButton() {
    const container = document.getElementById('special-mobile-chat-container');
    if (container) {
        container.style.display = 'block';
        ChannelIO('hideChannelButton');
        document.getElementById('special-mobile-chat-btn').onclick = () => ChannelIO('showMessenger');
        document.getElementById('special-mobile-close-btn').onclick = (e) => { e.stopPropagation(); container.style.display = 'none'; };
    }
}
