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
    //创建一个属性记录游戏是否结束
    isLive= true

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

        //检查蛇是否吃到了食物
       this.checkEat(X,Y)

        try{
            this.snake.X=X;
            this.snake.Y=Y;
        }catch(e){
            //说明蛇撞墙了，游戏结束
            alert('游戏结束')
            //将isLive设置为false
            this.isLive=false
        }
        

        //开启一个定时器
        this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30)
    }
    
    //定义一个方法，检查蛇是否吃到食物
    checkEat(X:number,Y:number){
        if( X === this.food.X && Y === this.food.Y){
            this.food.change();
            //分数增加
            this.scorePanel.addScore();
            //蛇增加一节1
            this.snake.addBody();
        }
    }
 }

 export default GameControl