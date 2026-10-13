const videoMarca = document.getElementById("video-marca");

if (videoMarca) {
    const videos = [
        "videos/video-abanto-1.mp4",
        "videos/video-abanto-2.mp4"
    ];

    let videoActual = 0;

    videoMarca.addEventListener("ended", () => {
        videoActual = (videoActual + 1) % videos.length;

        videoMarca.src = videos[videoActual];
        videoMarca.load();

        videoMarca.play().catch((error) => {
            console.error("No se pudo reproducir el video:", error);
        });
    });
}
