const core = require('cyberway-core-service');
const Basic = core.controllers.Basic;

class StateReader extends Basic {
    async _call(method, params) {
        return await this.callService('stateReader', method, params);
    }

    async getTokens({ params }) {
        return await this._call('getTokens', params);
    }

    async getBalances({ params }) {
        return await this._call('getBalances', params);
    }

    async getTopBalances({ params }) {
        return await this._call('getTopBalances', params);
    }

    async getUsernames({ params }) {
        return await this._call('getUsernames', params);
    }

    async getReceivedGrants({ params }) {
        return await this._call('getReceivedGrants', params);
    }

    async getDelegations({ params }) {
        return await this._call('getDelegations', params);
    }

    async getValidators({ params }) {
        return await this._call('getValidators', params);
    }

    async getLeaders({ params }) {
        return await this._call('getLeaders', params);
    }

    async getNameBids({ params }) {
        return await this._call('getNameBids', params);
    }

    async getLastClosedBid({ params }) {
        return await this._call('getLastClosedBid', params);
    }

    async getProposals({ params }) {
        return await this._call('getProposals', params);
    }

    async getProposalApprovals({ params }) {
        return await this._call('getProposalApprovals', params);
    }
}

module.exports = StateReader;
