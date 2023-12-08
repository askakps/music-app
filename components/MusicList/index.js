import React, { useState, useEffect, useRef } from 'react';

const MusicList = () => {
  const audioRef = useRef()
  const songs = [
    {
      title: 'Dr. Dre Feat. Snoop Dogg',
      artist: 'Snoop Dogg',
      url: 'https://cdn6.sefon.pro/prev/jrr6hfhEw4eesJHWzUUcNg/1697852814/1/Dr.%20Dre%20Feat.%20Snoop%20Dogg%20-%20Still%20D.R.E.%20%28192kbps%29.mp3',
      image: 'https://i.pinimg.com/736x/de/5e/92/de5e92f69137f7c1e41f47a02cc1526b.jpg',
    },
    {
      title: 'Lose Yourself',
      artist: 'Eminem',
      url: 'https://cdn8.sefon.pro/prev/Qf8H1IDI3xg8yd_HfGCsOg/1697851915/41/Eminem%20-%20Lose%20Yourself%20%28192kbps%29.mp3',
      image: 'https://myhotposters.com/cdn/shop/products/mF0016_1024x1024.jpeg?v=1571443904',
    },
    
  ];

  
  const [currentSong, setCurrentSong] = useState(null);

  
  const handleSongSelect = (url) => {
    setCurrentSong(url);
  };

  useEffect(() => {
    audioRef.current?.load()
    audioRef.current?.play()
  }, [currentSong]);

  return (
    <div className="bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">Hits</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index} className="mb-4">
            <div className="text-lg">{song.title}</div>
            <div className="text-gray-600">{song.artist}</div>
            <div>
              <img className="h-56 w-44 object-cover mb-2" src={song.image} alt="song image"></img>
            </div>
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
        <div className="audio-wrapper shadow-inner p-2">
          <audio ref={audioRef} controls className="rounded">
          <source src={currentSong} type="audio/mpeg" />
          
          Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default MusicList;
