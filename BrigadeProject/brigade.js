const { events } = require('brigadier');

events.on('push', () => {
  console.log('Hello from brig! Welcome to Successive group.. Please check output..!!!');
});
