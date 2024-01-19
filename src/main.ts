export default function tsTest() {

    let a: Number = 23;
    let s: String = 'str';
    let bool: boolean = true;
    let n: null = null;

    let v: Number | null = 34;

    let arr: String[] = ['1', '2', '3'];
    let arr2: Array<String | Number> = [1, '2', 4];
    let cort: [String, Number] = ['1', 2];

    function f(a: number, b: String): [String, Number] {
        return [b, a];
    }

    type User = {
        name: string,
        age: number
    }

    type myType = [string, number, User];

    function f2(): myType {
        return [
            's',
            2,
            {
                name: 'Alex',
                age: 33,
            }
        ]
    }

    enum options {
        FirstOption = 'abracadbra',
        test = 34,
    }

    console.log(options.FirstOption);

    let div: HTMLDivElement | null = document.querySelector('.root');

    console.log(div?.classList?.contains('root'));

    div ?
        div.classList ?
            div.classList.contains('root') :
            div.classList :
        div;

    interface UserI {
        group?: number,
        getInfo: () => string,
    }

    class User2 implements UserI {
        private name: string;
        protected age: number;
        group?: number | undefined;
        constructor (name: string, age: number, group?: number | undefined){
            this.name = name;
            this.age = age;
            this.group = group;
        }

        getInfo () {
            return `${this.name}, ${this.age}, ${this.group}`;
        };

        getName(): string{
            return this.name;
        }
    }

    let user = new User2('Alex', 33);

    console.log(user.getInfo());
    
}