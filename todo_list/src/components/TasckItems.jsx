import React from "react";
import Item from "./Item";

// const TasckItems = ({tasck}) => {
//     return (
//         <ul>
//             {tasck.map(item => <Item key={item.id} item={item}/>)}
//         </ul>
//     )
// }

// export default TasckItems;

export default class TasckItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coun: 0,
        };
        this.add = this.add.bind(this);
    }

    add() {
        this.setState({ ...this.state, coun: this.state.coun + 1 });
    }

    re () {
        this.setState({ ...this.state, coun: this.state.coun - 1 });
    }

    componentDidMount() {
        console.log('Компонент отрисован');
    }

    componentWillUnmount() {
        console.log('Компонент удален');
    }

    componentDidUpdate () {
        console.log('Компонент обновлен');
    }

    render() {
        const {coun} = this.state;
        const {tasck} = this.props
        return (
            <>
                <button onClick={() => this.re()}>-</button>
                {coun}
                <button onClick={this.add}>+</button>
                <ul>
                    {tasck.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </ul>
            </>
        );
    }
}
