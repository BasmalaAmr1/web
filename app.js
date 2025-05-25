fetch('/api/content')
  .then(res => res.json())
  .then(files => {
    const list = document.getElementById('audioList');
    files.forEach(file => {
      const li = document.createElement('li');
      li.textContent = file;
      li.onclick = () => {
        document.getElementById('player').src = `/audio/${file}`;
      };
      list.appendChild(li);
    });
  })
  .catch(err => console.error('Error fetching audio list:', err));