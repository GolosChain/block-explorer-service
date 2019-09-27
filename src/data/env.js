// Описание переменных окружения смотри в README.
const env = process.env;

module.exports = {
    GLS_FRONTEND_GATE_CONNECT: env.GLS_FRONTEND_GATE_CONNECT,
    GLS_BLOCKS_CONNECT: env.GLS_BLOCKS_CONNECT,
    GLS_STATE_READER_CONNECT: env.GLS_STATE_READER_CONNECT,
};
