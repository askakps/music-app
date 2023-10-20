"use client";
import MusicList from '../components/MusicList/index';
import Header from '../components/Header/index'

export default function Home() {
  return (
    
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <div className="container mx-auto p-4">
          <MusicList />
        </div>
      </main>
    </div>
  );
}
