//region imports
import * as io                    from 'socket.io-client';
import {Socket as SocketIOClient} from 'socket.io-client';
import {Injectable}               from "@angular/core";
import {v4 as uuidv4}             from "uuid";
import {IBaseAdapter}             from "./base-ajax.adapter";
import Emitter                    from 'component-emitter';
import {APIEvent}                 from "../../../../../../../shared/types/api/api-event";

//endregion


const URL = 'http://localhost:4000';




@Injectable({
  providedIn: "root"
})
export class BaseSocketAdapter implements IBaseAdapter {
  socket: SocketIOClient;
  user;

  constructor() {


    // @ts-ignore
    this.socket = io(URL, {transports: ['websocket'], upgrade: false});

    this.socket.on("connect", () => {
        console.log("SOCKET CONNECTED!!");
      }
    );
    this.socket.on("reconnect", () => {
        console.log("SOCKET RECONNECTED!!");
      }
    );
    this.socket.on("disconnect", () => {
        console.log("SOCKET DISCONNECTED :(");
      }
    );


  }

  async request<T = any>(event_name: APIEvent, data?) {

    return new Promise<T>((resolve, reject) => {
      const req_id = uuidv4();

      if (this.socket && this.socket.connected) {
        console.log(`client: sendMessage emitting event_name ${event_name} with id ${req_id} with data`, data);
        this.socket.emit(event_name, JSON.stringify(data), req_id);

        let emitter: Emitter;

        const
          fn = (res_data, request_id) => {
            if (request_id !== req_id) {
              return
            }

            resolve(res_data as T);
            emitter.off(event_name, fn);
          };

        emitter = this.socket.on(event_name, fn);

      } else {
        console.log("SocketAPI: no sockets connected...");
      }
    })

  }

  async listenToEvent<T = any>(event_name: APIEvent, fn: Function) {
    this.socket && this.socket.on(event_name, fn)

  }

  async stopListeningToEvent<T = any>(event_name: APIEvent) {
    this.socket && this.socket.off(event_name)

  }

}


// userStore      postsStore
// userAdapter   postsAdapter
// socketAPI
