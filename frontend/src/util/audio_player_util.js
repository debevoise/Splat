export const triggerSample = HTMLAudioElement => {
    HTMLAudioElement.currentTime = 0;
    HTMLAudioElement.play();
    return null;
}