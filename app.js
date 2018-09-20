const genre = document.querySelector('#genre');
 console.log('data', data);
const  filteredSongs = data.filter((song) =>{
    console.log('song', song.genre);
    return song.genre === 'Pop'
})

console.log('filteredSongs', filteredSongs);

const filteredArtist = data.filter ((artist) =>{
    console.log('artist.', artist.genre);
    return artist.genre === 'Pop'
})
 console.log('filteredArtist', filteredArtist);

 
const filteredSongs2 = data.filter((song) =>{
    console.log('song.genre', song.genre);
    return song.genre === 'hip-hop/rap'
})
console.log('filteredSongs2', filteredSongs2);

const filteredArtist2 = data.filter((song) =>{
    console.log('song.genre', song.genre);
    return song.genre === 'hip-hop/rap'
})
console.log('filteredArtist2', filteredArtist2);