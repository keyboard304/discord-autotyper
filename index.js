const dc = require('./discord');
const { sig } = require("./utils/sig");

(async () => {
    sig();

    await dc.initialize();
    // here is where you enter your email and password
    await dc.login('flash.tag304@gmail.com', 'Asdfghjk12ae')

    await dc.likeChannelProcess('server id', 'channel id', 1) // 1 = 1 minute

    debugger;

})();
