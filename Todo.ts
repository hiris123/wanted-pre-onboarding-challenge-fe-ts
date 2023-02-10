interface ITodo{
    id:number;
    content:string;
    isCompleted:string;
    category:string;
    tag?:string[]; // 선택적으로 구현하는 프로퍼티 (있어도 되고 없어도 됨)
}
// 인터페이스는 클래스와 개념이 유사하지만 객체를 생성할 수 없으므로 주로 타입 검사를 위해서 활용 

interface ICreateTodo{
   (todo: ITodo);
}

interface IGetTodo{
    (id: number): ITodo;
}

interface IUpdateTodo{
    (ITodo: IUpdateTodo);
}

interface IDeleteTodo{
    (id:number);
}

const CreateTodo:ICreateTodo = (todo) =>{};

const UpdateTodo:IUpdateTodo = (todo)=>{};

const DeleteId:IDeleteTodo = (id) => {};