import dotenv from 'dotenv'
import { env } from './tests/env/parsEnv';

dotenv.config({
    path: env('COMMON_CONFIG_FILE')
})

const common = `./src/tests/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/tests/steps/**/**/*.ts \
                -f json:./reports/report.json \
                --format progress-bar`;


const dev = `${common} --tags '@dev'`;
const smoke = `${common} --tags '@smoke'`;
const regression = `${common} --tags '@regression'`;

export { dev, smoke, regression}