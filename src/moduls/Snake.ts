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

        //修改X时，蛇在向左移动时，不能向右移动，反之亦然,
        //如果说要移动的位置和身体第二节重合说明移动方向错误
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value)
        {
            if(value>this.X){
                //如果新值value大于旧值X，说明蛇在向右走的过程中，
                //发生了掉头，应该继续向左走
                value=this.X-10;
            }else{
                value=this.X+10;
            }
        }

        //移动身体
        this.moveBody()

        this.head.style.left = value+'px'
        
        //检查有没有撞到自己
        this.checkHeadBody()
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

         //修改Y时，蛇在向上移动时，不能向下移动，反之亦然,
        //如果说要移动的位置和身体第二节重合说明移动方向错误
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value)
        {
            if(value>this.Y){
                value=this.Y-10;
            }else{
                value=this.Y+10;
            }
        }

        //移动身体
        this.moveBody()

        this.head.style.top = value+'px'

        //检查有没有撞到自己
        this.checkHeadBody()
    }

    //蛇增加身体的方法
    addBody(){
        //向element中添加一个div
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
    //添加蛇身体移动的方法
    moveBody(){
        /**
         * 将后边的身体设置为前边身体的位置
         *   第4节==》第3节的位置
         *   第2节==》蛇头的位置       
         */
        //获取所有的身体
        for(let i= this.bodies.length-1;i>0;i--)
        {            
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            //将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X+'px';
            (this.bodies[i] as HTMLElement).style.top = Y+'px';
        }

    }
    checkHeadBody(){
        //获取所有的身体，检查是否和蛇头的坐标发生重叠
        for(let i= 1;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y ===bd.offsetTop){
                //进入判断说明蛇头碰到了自己的身体,游戏结束
                throw new Error('撞到自己了~~')
            }
        }
    }
}
export default Snake