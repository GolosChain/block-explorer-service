const core = require('cyberway-core-service');
const Basic = core.controllers.Basic;

class Facade extends Basic {
    async _call(method, params) {
        return await this.callService('stateReader', method, params);
    }

    async getVersions() {
        const method = 'getVersion';
        const [state, blocks] = await Promise.all([
            this.callService('stateReader', method, {}).catch(() => ({})), // catch to prevent whole promise fail
            this.callService('blocks', method, {}).catch(() => ({})),
        ]);
        return {
            facade: process.env.npm_package_version,
            stateReader: state.version,
            blockService: blocks.version,
        };
    }
}

module.exports = Facade;
