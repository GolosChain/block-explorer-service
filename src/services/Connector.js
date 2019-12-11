const core = require('cyberway-core-service');
const BasicConnector = core.services.Connector;
const env = require('../data/env');

const Transfer = require('../controllers/Transfer');
const Blocks = require('../controllers/Blocks');
const StateReader = require('../controllers/StateReader');
const Facade = require('../controllers/Facade');

class Connector extends BasicConnector {
    constructor() {
        super();

        const params = {
            connector: this,
        };

        this._transfer = new Transfer(params);
        this._blocks = new Blocks(params);
        this._stateReader = new StateReader(params);
        this._facade = new Facade(params);
    }

    async start() {
        const transfer = this._transfer;
        const blocks = this._blocks;
        const stateReader = this._stateReader;

        await super.start({
            serverRoutes: {
                /* public points */
                'blocks.getBlockList': {
                    handler: blocks.getBlockList,
                    scope: blocks,
                },
                'blocks.getBlock': {
                    handler: blocks.getBlock,
                    scope: blocks,
                },
                'blocks.getBlockTransactions': {
                    handler: blocks.getBlockTransactions,
                    scope: blocks,
                },
                'blocks.getTransaction': {
                    handler: blocks.getTransaction,
                    scope: blocks,
                },
                'blocks.findEntity': {
                    handler: blocks.findEntity,
                    scope: blocks,
                },
                'blocks.getBlockChainInfo': {
                    handler: blocks.getBlockChainInfo,
                    scope: blocks,
                },
                'accounts.getProposal': {
                    handler: blocks.getProposal,
                    scope: blocks,
                },
                'accounts.getProposals': {
                    handler: blocks.getProposals,
                    scope: blocks,
                },
                'accounts.getAccount': {
                    handler: blocks.getAccount,
                    scope: blocks,
                },
                'blocks.getAccountTransactions': {
                    handler: blocks.getAccountTransactions,
                    scope: blocks,
                },
                'graphs.getLastHourGraph': {
                    handler: blocks.getLastHourGraph,
                    scope: blocks,
                },
                'chain.getProducers': {
                    handler: blocks.getProducers,
                    scope: blocks,
                },
                'chain.getValidators': {
                    handler: blocks.getValidators,
                    scope: blocks,
                },
                'chain.getTokensExt': {
                    handler: blocks.getTokensExt,
                    scope: blocks,
                },

                'stateReader.getTokens': {
                    handler: stateReader.getTokens,
                    scope: stateReader,
                },
                'stateReader.getBalances': {
                    handler: stateReader.getBalances,
                    scope: stateReader,
                },
                'stateReader.getTopBalances': {
                    handler: stateReader.getTopBalances,
                    scope: stateReader,
                },
                'stateReader.getUsernames': {
                    handler: stateReader.getUsernames,
                    scope: stateReader,
                },
                'stateReader.getStakeAgents': {
                    handler: stateReader.getStakeAgents,
                    scope: stateReader,
                },
                'stateReader.getStakeStat': {
                    handler: stateReader.getStakeStat,
                    scope: stateReader,
                },
                'stateReader.getReceivedGrants': {
                    handler: stateReader.getReceivedGrants,
                    scope: stateReader,
                },
                'stateReader.getDelegations': {
                    handler: stateReader.getDelegations,
                    scope: stateReader,
                },
                'stateReader.getValidators': {
                    handler: stateReader.getValidators,
                    scope: stateReader,
                },
                'stateReader.getLeaders': {
                    handler: stateReader.getLeaders,
                    scope: stateReader,
                },
                'stateReader.getNameBids': {
                    handler: stateReader.getNameBids,
                    scope: stateReader,
                },
                'stateReader.getLastClosedBid': {
                    handler: stateReader.getLastClosedBid,
                    scope: stateReader,
                },
                'stateReader.getProposals': {
                    handler: stateReader.getProposals,
                    scope: stateReader,
                },
                'stateReader.getProposalApprovals': {
                    handler: stateReader.getProposalApprovals,
                    scope: stateReader,
                },

                getVersions: {
                    handler: this._facade.getVersions,
                    scope: this._facade,
                },
                getVersion: {
                    handler: () => ({
                        version: process.env.npm_package_version,
                    }),
                },

                /* inner services only points */
                transfer: {
                    handler: transfer.handle,
                    scope: transfer,
                },
            },
            requiredClients: {
                frontend: env.GLS_FRONTEND_GATE_CONNECT,
                blocks: env.GLS_BLOCKS_CONNECT,
                stateReader: env.GLS_STATE_READER_CONNECT,
            },
        });
    }
}

module.exports = Connector;
