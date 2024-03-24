const track = document.getElementById("image-track");

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mousedownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * 100;

    track.style.transform = `translate(${percentage}%, -50%)`;
}