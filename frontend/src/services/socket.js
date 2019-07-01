import Ws from '@adonisjs/websocket-client';

const socket = Ws('ws://127.0.0.1:3333').connect();

export default socket;
