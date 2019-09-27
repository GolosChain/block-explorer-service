const core = require('cyberway-core-service');
const BasicMain = core.services.BasicMain;
const env = require('./data/env');
const Connector = require('./services/Connector');

class Main extends BasicMain {
    constructor() {
        super(env);

        this.defineMeta({
            name: 'block-explorer-facade',
        });

        this.addNested(new Connector());
    }
}

module.exports = Main;
