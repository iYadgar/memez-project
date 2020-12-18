/*
import * as io                    from 'socket.io-client';
import {Injectable}               from "@angular/core";
import {Socket as SocketIOClient} from 'socket.io-client'
import {IUser}                    from "../../../../../../../shared/types/Entities/IUser";

export type APIEvent = 'ping' | 'getUsers' | 'getLikes';


const URL = 'http://localhost:4000';


@Injectable({
  providedIn: "root"
})
export class SocketAdapter {
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
      this.user = users
      console.log(this.user)
    })
    this.socket.on('getPosts', (post) => {
      alert(`post content : ${post.content}, posted by : ${post.postedBy.name}  `)
    })


    this.socket.on("reconnect", (sock) => {
        console.log("SOCKET RECONNECTED!!");
      }
    );


    this.socket.on("disconnect", () => {
        console.log("SOCKET DISCONNECTED :(");
        // this.socket = null
      }
    );


  }

  protected async request(event_name: APIEvent) {
    if (this.socket && this.socket.connected) {
      console.log(`client: sendMessage emitting event_name ${event_name} with data`);
      console.log(this.user)
      console.log(`_______________`)
      await this.socket.emit(`get${event_name}`);
      console.log(this.user)
    } else {
      console.log("SocketAPI: no sockets connected...");
    }
  }


}
*/
