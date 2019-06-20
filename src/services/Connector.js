const core = require('gls-core-service');
const BasicConnector = core.services.Connector;
const env = require('../data/env');

const Transfer = require('../controllers/Transfer');
const Blocks = require('../controllers/Blocks');

class Connector extends BasicConnector {
    constructor() {
        super();

        const params = {
            connector: this,
        };

        this._transfer = new Transfer(params);
        this._blocks = new Blocks(params);
    }

    async start() {
        const transfer = this._transfer;
        const blocks = this._blocks;

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

                /* inner services only points */
                transfer: {
                    handler: transfer.handle,
                    scope: transfer,
                },
            },
            requiredClients: {
                frontend: env.GLS_FRONTEND_GATE_CONNECT,
                blocks: env.GLS_BLOCKS_CONNECT,
            },
        });
    }
}

module.exports = Connector;
