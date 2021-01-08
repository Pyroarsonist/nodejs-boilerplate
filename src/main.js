import { someEnv } from 'config';
import debugHandler from 'debug';

const debug = debugHandler('app:main');

console.info('Hello world!');
debug({ someEnv });
debug('Environment is development:', globalThis.__DEV__);
