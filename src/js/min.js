require.config({
    paths: {
        'jquery': '../lib/jquery-1.10.1.min',
        'paging': '../lib/paging',
        'comm': 'common',
    },
    shim: {
        'paging': { deps: ['jquery'] },
        'index': { deps: ['jquery'] },
        'list': { deps: ['jquery', 'paging', 'index'] }
    }
});

requirejs(['jquery', 'paging', 'comm', 'index', 'list'], function () { });