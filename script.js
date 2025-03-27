fetch('servers.json')
    .then(response => response.json())
    .then(data => {
        let serverList = document.getElementById('server-list');
        serverList.innerHTML = '';

        data.forEach(server => {
            let div = document.createElement('div');
            div.className = 'server';
            div.innerHTML = `<strong>${server.name}</strong> - ${server.players} graczy`;
            serverList.appendChild(div);
        });
    })
    .catch(error => console.error('Błąd wczytywania serwerów:', error));
