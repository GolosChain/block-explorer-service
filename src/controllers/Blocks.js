const core = require('gls-core-service');
const BasicController = core.controllers.Basic;

class Blocks extends BasicController {
    async getBlockList({ params }) {
        return this.callService('blocks', 'getBlockList', params);
    }

    async getBlockTransactions({ params }) {
        return this.callService('blocks', 'getBlockTransactions', params);
    }

    async getTransaction({ params }) {
        return this.callService('blocks', 'getTransaction', params);
    }
}

module.exports = Blocks;
