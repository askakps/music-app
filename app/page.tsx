"use client";
import MusicList from '../components/MusicList/index';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-500 py-4">
        <h1 className="text-3xl text-white text-center">My Music App</h1>
      </header>
      <main>
        <div className="container mx-auto p-4">
          <MusicList />
        </div>
      </main>
    </div>
  );
}
