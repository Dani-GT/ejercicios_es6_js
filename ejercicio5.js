// Dado el siguiente javascript, utiliza .filter() para mostrar por consola 
// los streamers que incluyan la palabra introducida en el input. De esta forma, si 
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// Función para filtrar y mostrar los streamers
const filterStreamers = () => {
    const input = document.getElementById('searchInput');
    const searchInput = input.value.toLowerCase(); // Obtener el valor del input en minúsculas

    const filteredStreamers = streamers.filter(streamer => 
        streamer.name.toLowerCase().includes(searchInput) // Filtrar por nombre
    );

    // Mostrar los streamers filtrados en la consola
    console.log(filteredStreamers);
};

// Añadir un evento para escuchar los cambios en el input
const input = document.getElementById('searchInput');
input.addEventListener('input', filterStreamers);