import * as io from 'socket.io-client';
import {Injectable} from "@angular/core";

export type APIEvent = 'ping' | 'getPosts' | 'getLikes';


const URL = 'http://localhost:4000';


@Injectable({
  providedIn: "root"
})
export class SocketAdapter {
  socket;

  constructor() {
    console.log('CTOR !!!');

    // @ts-ignore
    this.socket = io(URL, {transports: ['websocket'], 	upgrade: false});

    this.socket.on("connect", () => {
        console.log("SOCKET CONNECTED!!");
      }
    );

    this.socket.on("reconnect", (sock) => {
        console.log("SOCKET RECONNECTED!!");
      }
    );

    this.socket.on("disconnect", () => {
        console.log("SOCKET DISCONNECTED :(");
        // this.socket = null
      }
    );

    this.socket.on('hello', ()=>{
        console.log('RECEIVED HELLO !!!');
    })
  }

  protected sendMessage(event_name: APIEvent, req_data: any = "", req_id: string) {
    if (this.socket && this.socket.connected) {
      console.log(`client: sendMessage emitting event_name ${event_name} with data`, req_data);

      this.socket.emit(event_name, JSON.stringify(req_data), req_id);
    } else {
      console.log("SocketAPI: no sockets connected...");
    }
  }

}
