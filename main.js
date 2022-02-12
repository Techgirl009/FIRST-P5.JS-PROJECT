function preload()
{

}

function setup()
{
    canvas = createCanvas(850, 850);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 850, 850);

    rect(30, 30, 750, 55);
    rect(30, 30, 55, 750);
    rect(765, 30, 55, 750);
    rect(30, 765, 750, 55);

    circle(800, 800, 100);
    circle(50, 800, 100);
    circle(800, 50, 100);
    circle(50, 50, 100);

    fill(255,255,0);
}

function take_snapshot()
{
    save("sahasra.png");
}