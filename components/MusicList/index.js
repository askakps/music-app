import React, { useState, useEffect } from 'react';

const MusicList = () => {
  
  const songs = [
    {
      title: 'Song 1',
      artist: 'Artist 1',
      url: 'https://audiocdn.epidemicsound.com/ES_ITUNES/Y5lrB0_Calming%20Rain/ES_Calming%20Rain.mp3',
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      url: 'https://audiocdn.epidemicsound.com/ES_ITUNES/dALIml_Top%20Tier/ES_Top%20Tier.mp3',
    },
    
  ];

  
  const [currentSong, setCurrentSong] = useState(null);

  
  const handleSongSelect = (url) => {
    setCurrentSong(url);
  };

  useEffect(() => {
    
  }, [currentSong]);

  return (
    <div className="bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">Music List</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index} className="mb-4">
            <div className="text-lg">{song.title}</div>
            <div className="text-gray-600">{song.artist}</div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => handleSongSelect(song.url)}
            >
              Play
            </button>
          </li>
        ))}
      </ul>
  
      {currentSong && (
        <audio controls className="mt-4">
          <source src={currentSong} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default MusicList;
