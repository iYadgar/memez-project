//region imports
import * as io                    from 'socket.io-client';
import {Injectable}               from "@angular/core";
import {Socket as SocketIOClient} from 'socket.io-client'
import {IUser}                    from "../../../../../../../shared/types/Entities/IUser";
//endregion
 

export type APIEvent = 'ping' | 'getUsers' | 'getLikes';


const URL = 'http://localhost:4000';


@Injectable({
  providedIn: "root"
})
export class SocketAdapter {
  // @ts-ignore
  socket: SocketIOClient
  user;

  constructor() {


    // @ts-ignore
    this.socket = io(URL, {transports: ['websocket'], upgrade: false});

    this.socket.on("connect", () => {
        console.log("SOCKET CONNECTED!!");
      }
    );
    this.socket.on('getUsers', async (users: IUser[]) => {
      console.log('received getUsers reply', users);
    })
    this.socket.on('getPosts', (post) => {
      alert(`post content : ${post.content}, posted by : ${post.postedBy.name}  `)
    })


    this.socket.on("reconnect", () => {
        console.log("SOCKET RECONNECTED!!");
      }
    );
    this.socket.on('pong', () => {
      console.log('pong')

    })

    this.socket.on("disconnect", () => {
        console.log("SOCKET DISCONNECTED :(");
      }
    );


  }

  protected async request(event_name: APIEvent, data) {
    if (this.socket && this.socket.connected) {
      console.log(`client: sendMessage emitting event_name ${event_name} with data`, data);
      this.socket.emit(event_name);
    } else {
      console.log("SocketAPI: no sockets connected...");
    }
  }

}
