import React, { FC, useState, FormEvent as FE } from "react";
import { useAction } from "../../hooks/redux";
import { TTodo } from "../../store/reducers/toDoSlice";
import s from './Modal.module.css';

type TProps = {
	close: () => void;
	className?: string;
    uid: string
};

const Modal: FC<TProps> = (props) => {
    const {close, className, uid} = props
	const [content, setContent] = useState<string>("");
	const [date, setDate] = useState<string>("");
    const {setTodo} = useAction();

    const addTodo = (e: FE<HTMLFormElement>) => {
        e.preventDefault();
        const todo: TTodo = {
            id: Date.now(),
            content: content,
            isActive: true,
            isComplite: false,
            timeToEnd: new Date(date).toUTCString(),
        }

        setTodo(uid, todo);
        close();
    }

	return (
		<div className={s.modal}>
			<div className={s.content}>
				<div className={s.close} onClick={close}>
					X
				</div>
				<form onSubmit={addTodo} className={s.form}>
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
					></textarea>
					<input
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
                        required
					/>
					<button type="submit">Добавить</button>
				</form>
			</div>
		</div>
	);
};

export default Modal;
