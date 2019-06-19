const core = require('gls-core-service');
const BasicController = core.controllers.Basic;

class Blocks extends BasicController {
    async getBlockList({ params }) {
        return await this.callService('blocks', 'getBlockList', params);
    }

    async getBlock({ params }) {
        return await this.callService('blocks', 'getBlock', params);
    }

    async getBlockTransactions({ params }) {
        return this.callService('blocks', 'getBlockTransactions', params);
    }

    async getTransaction({ params }) {
        return this.callService('blocks', 'getTransaction', params);
    }

    async findEntity({ params }) {
        return this.callService('blocks', 'findEntity', params);
    }
}

module.exports = Blocks;
