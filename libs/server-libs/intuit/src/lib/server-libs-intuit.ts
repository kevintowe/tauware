import * as http from 'http';
import { OAuthClient } from './types';

export function instantiate(client?: OAuthClient) {
  http
    .createServer((req, res) => {
      console.log(req);
      res.write('Hello world!!!!');
      res.end();
    })
    .listen(1000);
}

function handleRequest(req: http.IncomingMessage) {}
