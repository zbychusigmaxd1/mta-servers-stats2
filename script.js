// Funkcja do wczytania serwerów z pliku JSON
async function loadServers() {
    const response = await fetch('servers.json');  // Zmiana ścieżki na lokalny plik
    const servers = await response.json();
    
    const serversTable = document.getElementById('servers-table').getElementsByTagName('tbody')[0];
    serversTable.innerHTML = '';  // Wyczyść tabelę przed załadowaniem nowych danych

    servers.forEach(server => {
        const row = serversTable.insertRow();
        const nameCell = row.insertCell(0);
        const playersCell = row.insertCell(1);
        nameCell.textContent = server.name;
        playersCell.textContent = server.players;
    });
}

// Funkcja do dodawania nowego serwera
document.getElementById('add-server').addEventListener('click', () => {
    const serverName = document.getElementById('new-server-name').value;
    const playerCount = document.getElementById('new-player-count').value;

    if (serverName && playerCount) {
        // Wczytaj plik JSON, dodaj nowy serwer i zapisz z powrotem
        fetch('servers.json')
            .then(response => response.json())
            .then(data => {
                const newServer = {
                    name: serverName,
                    players: playerCount
                };
                data.push(newServer);
                // Zapisz zaktualizowane dane do pliku (np. API backend)
                alert("Serwer dodany!");
                loadServers();  // Przeładuj dane z pliku
            });
    }
});

// Załaduj dane po załadowaniu strony
window.onload = loadServers;
