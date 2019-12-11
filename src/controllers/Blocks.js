const core = require('cyberway-core-service');
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

    async getBlockChainInfo({ params }) {
        return this.callService('blocks', 'getBlockChainInfo', params);
    }

    async getProposal({ params }) {
        return this.callService('blocks', 'getProposal', params);
    }

    async getProposals({ params }) {
        return this.callService('blocks', 'getProposals', params);
    }

    async getAccount({ params }) {
        return this.callService('blocks', 'getAccount', params);
    }

    async getAccountTransactions({ params }) {
        return this.callService('blocks', 'getAccountTransactions', params);
    }

    async getLastHourGraph({ params }) {
        return this.callService('blocks', 'getLastHourGraph', params);
    }

    async getProducers({ params }) {
        return this.callService('blocks', 'getProducers', params);
    }

    async getValidators({ params }) {
        return this.callService('blocks', 'getValidators', params);
    }
    async getTokensExt({ params }) {
        return this.callService('blocks', 'getTokensExt', params);
    }
}

module.exports = Blocks;
