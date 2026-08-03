import { useEffect, useRef, useState } from "react";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    audio.loop = true;
    // Autoplay setelah interaksi pertama user
    const tryPlay = () => {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
      window.removeEventListener("click", tryPlay);
    };
    window.addEventListener("click", tryPlay);
    return () => window.removeEventListener("click", tryPlay);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2">
      <audio ref={audioRef} src="/music.mp3" />

      {/* Expanded controls */}
      {isExpanded && (
        <div className="flex items-center gap-2 glass rounded-2xl px-4 py-2 animate-fade-in">
          <button
            onClick={togglePlay}
            className="text-white hover:text-blue-400 transition-colors"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <div className="flex items-center gap-1">
            <div className={`w-1 h-3 rounded-full bg-blue-400 ${isPlaying ? "animate-bounce" : ""}`} style={{ animationDelay: "0ms" }} />
            <div className={`w-1 h-5 rounded-full bg-purple-400 ${isPlaying ? "animate-bounce" : ""}`} style={{ animationDelay: "150ms" }} />
            <div className={`w-1 h-3 rounded-full bg-cyan-400 ${isPlaying ? "animate-bounce" : ""}`} style={{ animationDelay: "300ms" }} />
          </div>
          <span className="text-xs text-slate-400 w-24 truncate">Background Music</span>
          <button
            onClick={toggleMute}
            className="text-white hover:text-blue-400 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110"
        style={{
          boxShadow: isPlaying ? "0 0 20px rgba(59,130,246,0.4)" : "none",
        }}
      >
        <Music size={18} className={`text-blue-400 ${isPlaying ? "animate-pulse" : ""}`} />
      </button>
    </div>
  );
}