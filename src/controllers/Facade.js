const core = require('cyberway-core-service');
const Basic = core.controllers.Basic;

class Facade extends Basic {
    async _call(method, params) {
        return await this.callService('stateReader', method, params);
    }

    async getVersions() {
        const method = 'getVersion';
        const [state, blocks] = await Promise.all([
            this.callService('stateReader', method, {}).catch(e => e),
            this.callService('blocks', method, {}).catch(e => e),
        ]);
        return {
            facade: process.env.npm_package_version,
            stateReader: state.version,
            blockService: blocks.version,
        };
    }
}

module.exports = Facade;
