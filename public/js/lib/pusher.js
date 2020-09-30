/*
* An instance of a Pusher client, from which channels can be subscribed
* to, etc.
*/
import Pusher from 'pusher-js';

import api from 'api';

import { PUSHER_APP_KEY, PUSHER_APP_CLUSTER, PUSHER_LOG } from '../app/config/pusher';

Pusher.logToConsole = PUSHER_LOG;

const pusher = new Pusher(PUSHER_APP_KEY, {
  cluster: PUSHER_APP_CLUSTER,
  encrypted: true,
  authorizer(channel) {
    return {
      authorize(socketId, callback) {

        api.post('/user/auth/pusher', {
          socket_id: socketId,
          channel: channel.name,
        }, { inAccount: false })

          .done((authInfo) => {
            callback(false, authInfo);
          }, (err) => {
            callback(err);
          });

      },
    };
  },
});

export default pusher;
