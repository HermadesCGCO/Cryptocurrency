const redis = require("redis")

const CHANNELS = {
    TEST: "TEST"
}

class PubSub {
    constructor() {
	this.publisher = redis.createClient()
	this.subscriber = redis.createClient()

	this.subscriber.subscribe(CHANNELS.TEST)

	this.subscriber.on(
	    "message",
	    (channel, message) => this.handleMessage(channel, message)
	)
    }

    handleMessage(channel, message) {
	console.log(`Message received: ${message}. Channel: ${channel}.`)
    }
}

const testPubSub = new PubSub()

setTimeout(() => testPubSub.publisher.publish(CHANNELS.TEST, 'foo'), 1000)
