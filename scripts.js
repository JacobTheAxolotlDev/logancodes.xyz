fetch('https://api.logancodes.xyz/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'logan', password: '1234' })
})
.then(res => res.json())
.then(data => console.log(data));
