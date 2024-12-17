const lightsaberSound = document.getElementById("lightsaberSound");
const elements = document.querySelectorAll(".element");

// Check if the audio element was found
if (lightsaberSound) {
  elements.forEach(element => {
    element.addEventListener("mouseenter", () => {
      lightsaberSound.currentTime = 0; // Reset sound to start
      lightsaberSound.play()
        .then(() => {
          // Playback started successfully
          console.log("Lightsaber sound started.");
        })
        .catch(error => {
          // Handle playback error
          console.error("Error playing lightsaber sound:", error);
        });
    });

    element.addEventListener("mouseleave", () => {
      lightsaberSound.pause();
      lightsaberSound.currentTime = 0; // Reset sound for next play
      console.log("Lightsaber sound stopped.");
    });
  });
} else {
  console.error("Audio element with ID 'lightsaberSound' not found.");
}