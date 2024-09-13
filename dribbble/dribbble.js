document.querySelectorAll('.position-left').forEach(element=>
    {
        const leftValue = element.getAttribute('data-left');
        element.style.left = leftValue;
    })
    const notice = document.querySelector('.Notice');
let hue = 0;

function changeGradient() 
{
    hue += 0.1;
    const gradient = `linear-gradient(90deg, hsl(${hue}, 100%, 70%), hsl(${hue + 1}, 100%, 70%))`;
    //linear-gradient = css함수
    notice.style.background = gradient;

    requestAnimationFrame(changeGradient);
}
changeGradient();

let photoDisplay = 0;
function Repetition()// 이미지 이동
{
    photoDisplay++;
    if(photoDisplay  == 5)
    photoDisplay = 0;
    document.querySelector('.photoZone').style.transform = `translateX(-${photoDisplay * 10}px)`;
}
setInterval(Repetition,500);
