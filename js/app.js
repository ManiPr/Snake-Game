const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let scale=10;

function Snake(){
    this.x=0;
    this.y=0;
    this.xSpeed=scale;
    this.ySpeed=0;
    this.snakeDraw=function (){
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, scale, scale);
    };
    this.updateLocation=function(){
        this.x += this.xSpeed;
        this.y +=this.ySpeed;
    };
}
window.addEventListener('load',()=>{
    console.log('load');
    let snake=new Snake();
    
   setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.snakeDraw();
    snake.updateLocation();
  }, 200);
})