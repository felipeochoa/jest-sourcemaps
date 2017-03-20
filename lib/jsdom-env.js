const _JSDOMEnvironment = require('jest-environment-jsdom');
const { sourceMaps } = require('./sourceMaps');

class JSDOMEnvironment extends _JSDOMEnvironment {
    runScript(script) {
        if (this.global) {
            this.global.__sourceMaps = sourceMaps;
            return super.runScript(script);
        }
        return null;
    }
}

module.exports = JSDOMEnvironment;
