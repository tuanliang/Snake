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
export default Food