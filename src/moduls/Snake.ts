class Snake{
    //表示蛇头的元素
    head:HTMLElement;
    //蛇的身体（包括蛇头）
    bodies:HTMLCollection;
    //获取蛇的容器
    element:HTMLElement;

    constructor(){
        this.element = document.getElementById('snake')!;
        //as 是断言
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');

    }

    //获取蛇的坐标(蛇头)
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    //设置蛇头的坐标
    set X(value:number){
        //如果新值和旧值相同，泽不必修改
        if(this.X==value){
            return;
        }

        //X的合法范围 0~290
        //撞墙
        if(value<0 || value>290){
            throw new Error('蛇撞墙了')
        }

        this.head.style.left = value+'px'
    }
    set Y(value:number){
        if(this.Y==value){
            return;
        }
        //X的合法范围 0~290
        //撞墙
        if(value<0 || value>290){
            throw new Error('蛇撞墙了')
        }
        this.head.style.top = value+'px'
    }

    //蛇增加身体的方法
    addBody(){
        //向element中添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
}
export default Snake