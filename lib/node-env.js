const _NodeEnvironment = require('jest-environment-node');
const { sourceMaps } = require('./sourceMaps');

class NodeEnvironment extends _NodeEnvironment {
    runScript(script) {
        if (this.global) {
            this.global.__sourceMaps = sourceMaps;
            return super.runScript(script);
        }
        return null;
    }
}

module.exports = NodeEnvironment;
