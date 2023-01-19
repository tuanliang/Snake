//引入样式
import './style/index.less'

//食物类food
class Food{
    element:HTMLElement;

    constructor(){
        this.element = document.getElementById('food')!;
    }

    //定义获取食物X轴坐标的位置
    get X(){
        return this.element.offsetLeft
    }
    get Y(){
        return this.element.offsetTop;
    }
    //修改食物的位置
    change(){
        //生成随机的位置
        //食物的位置最小是0，最大是290
        //蛇每次移动就是一格，一格的大小就是10，所以要求食物的坐标必须是整数10、
        let left = Math.round(Math.random()*29)*10;
        let top = Math.round(Math.random()*29)*10;


        this.element.style.left=left+'px';
        this.element.style.top=top+'px';
    }
}

//测试代码
// const food = new Food()
// console.log(food.X,food.Y);
// food.change()
// console.log(food.X,food.Y);

//定义表示记分牌的类
class ScorePanel{
    score=0;
    level=1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    //设置一个变量限制登记
    maxLevel:number

    constructor(maxLevel:number=10){
        this.scoreEle=document.getElementById('score')!;
        this.levelEle=document.getElementById('level')!;
        this.maxLevel=maxLevel
    }

    //设置加分的方法
    addScore(){
        this.scoreEle.innerHTML=++this.score+'';
    }

    //提升等级的方法
    levelUp(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML=++this.level+'';
        }
    }
}

const scorePanel = new ScorePanel();
scorePanel.addScore()
scorePanel.addScore()
scorePanel.addScore()