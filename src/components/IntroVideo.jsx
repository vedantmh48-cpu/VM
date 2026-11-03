import { useEffect, useRef, useState } from "react";

export default function IntroVideo({ onFinish }) {
    const videoRef = useRef(null);
    const audioRef = useRef(null);
    const finishedRef = useRef(false);
    const [soundPlaying, setSoundPlaying] = useState(false);
    const [soundMessage, setSoundMessage] = useState("");
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [videoNeedsTap, setVideoNeedsTap] = useState(false);
    const [videoError, setVideoError] = useState(false);

    const finish = () => {
        if (finishedRef.current) return;
        finishedRef.current = true;

        videoRef.current?.pause();
        audioRef.current?.pause();
        if (audioRef.current) audioRef.current.currentTime = 0;
        onFinish?.();
    };

    const playSoundtrack = () => {
        const audio = audioRef.current;
        if (!audio) {
            setSoundMessage("The intro soundtrack is unavailable.");
            return;
        }

        audio.play()
            .then(() => {
                setSoundPlaying(true);
                setSoundMessage("");
            })
            .catch((error) => {
                setSoundPlaying(false);
                setSoundMessage(
                    error.name === "NotAllowedError"
                        ? "Tap Enable Sound to play the soundtrack."
                        : "The intro soundtrack could not be played."
                );
            });
    };

    const startVideo = () => {
        const video = videoRef.current;
        if (!video) return;

        video.play()
            .then(() => setVideoNeedsTap(false))
            .catch((error) => {
                if (error.name === "NotAllowedError" || error.name === "AbortError") {
                    setVideoNeedsTap(true);
                    return;
                }
                setVideoError(true);
            });
    };

    useEffect(() => {
        document.body.classList.add("intro-open");
        const handleKeyDown = (event) => {
            if (event.key === "Escape") finish();
        };
        window.addEventListener("keydown", handleKeyDown);
        startVideo();

        return () => {
            document.body.classList.remove("intro-open");
            window.removeEventListener("keydown", handleKeyDown);
            videoRef.current?.pause();
            audioRef.current?.pause();
        };
    }, []);

    return (
        <div className="intro-video" role="dialog" aria-modal="true" aria-label="Portfolio video introduction">
            <video
                ref={videoRef}
                className="intro-video-media"
                src={`${import.meta.env.BASE_URL}images/1.mp4`}
                autoPlay
                muted
                playsInline
                preload="auto"
                aria-label="Portfolio introduction video"
                onPlay={playSoundtrack}
                onPlaying={() => setVideoPlaying(true)}
                onPause={() => {
                    setVideoPlaying(false);
                    audioRef.current?.pause();
                }}
                onEnded={finish}
                onError={() => setVideoError(true)}
            />
            <audio
                ref={audioRef}
                src={`${import.meta.env.BASE_URL}images/1.mp3`}
                preload="auto"
                onPlay={() => setSoundPlaying(true)}
                onPause={() => setSoundPlaying(false)}
                onEnded={() => setSoundPlaying(false)}
                onError={() => setSoundMessage("The intro soundtrack could not be loaded.")}
            />

            <div className="intro-video-controls">
                <div className="intro-video-message" role="status" aria-live="polite">
                    {videoError
                        ? "The intro video could not be loaded."
                        : soundMessage || (videoNeedsTap ? "Tap Play Intro to start the video." : "")}
                </div>
                <div className="intro-video-actions">
                    {!videoPlaying && !videoError && (
                        <button className="intro-sound-button" type="button" onClick={startVideo}>
                            Play Intro
                        </button>
                    )}
                    {!soundPlaying && (
                        <button className="intro-sound-button" type="button" onClick={playSoundtrack}>
                            Enable Sound
                        </button>
                    )}
                    <button className="intro-skip-button" type="button" onClick={finish}>
                        Skip Intro <span aria-hidden="true">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
