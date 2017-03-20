require('source-map-support').install({
    handleUncaughtExceptions: false,
    retrieveSourceMap(source) {
        const sourceMaps = global.__sourceMaps;
        if (sourceMaps[source]) {
            return {url: source, map: sourceMaps[source]};
        }
        return null;
    },
});
