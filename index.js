const { App } = require('@slack/bolt')
require('dotenv').config()

// initialises app with bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

(async () => {
    // start the app
    await app.start(process.env.PORT || 3000)

    console.log('Bolt app is running')
})()