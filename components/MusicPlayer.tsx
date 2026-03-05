
"use client";
import { useState } from "react";
import { Play, Pause } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="flex items-center gap-4 bg-white/50 p-3 rounded-full backdrop-blur-md">
      <button onClick={() => setIsPlaying(!isPlaying)} className="p-2 bg-primary text-white rounded-full">
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <span className="text-sm font-semibold text-primary italic">"I See The Light"</span>
    </div>
  );
}