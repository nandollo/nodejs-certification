const EventEmitter = require('events')

class Emitter extends EventEmitter {}
emitter = new Emitter()

emitter.on('season', function() {
	var fname = "Boss"
	var lname = "Baby"
  console.log('My name is' + fname + lname)
})

emitter.emit('mokeira')