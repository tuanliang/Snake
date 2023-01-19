//引入其他的类
import Snake from './Snake';
import Food from './Food'
import ScorePanel from './ScorePanel';

 //游戏控制器，控制其他所有类
 class GameControl{
    //定义三个属性
    //蛇

    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;

    //创建一个属性来存储蛇的移动方向（也就是按键的方向）
    directiion:string="";

    constructor(){
        this.snake=new Snake();
        this.food=new Food();
        this.scorePanel=new ScorePanel()
        this.init()
    }

    //游戏的初始化方法,调用后游戏即开始
    init(){
        //绑定键盘按键按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this));//.bind(this)此时无this指向问题
        //调用run方法，使蛇移动
        this.run();
    }

    //创建键盘按下的响应函数 event.key:ArrowDow ArrowRigh ArrowU ArrowLeft
    keydownHandler(event:KeyboardEvent){
        //需要检查event.key的值是否合法（用户是否按了正确的键）
        //修改direction属性
        this.directiion=event.key;

        
    }
    //创建一个控制蛇移动的方法
    run(){

        //获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch(this.directiion){
            case "ArrowUp":
                Y-=10;
                break;
            case "ArrowDown":
                Y+=10;
                break;
            case "ArrowLeft":
                X-=10;
                break;
            case "ArrowRight":
                X+=10;
                break;
        }
        this.snake.X=X;
        this.snake.Y=Y;

        //开启一个定时器
        setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
    }
 }

 export default GameControl