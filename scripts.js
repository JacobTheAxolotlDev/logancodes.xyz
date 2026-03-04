fetch('https://api.logancodes.xyz/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'logan', password: '1234' })
})
.then(res => res.json())
.then(data => console.log(data));

const socket = io('https://api.logancodes.xyz');

socket.on('connect', () => console.log('Connected!'));
socket.on('message', msg => console.log('Message:', msg));

// send a test message
socket.emit('message', { text: 'hello from website' });
