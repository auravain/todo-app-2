import React from 'react';
import './TodoItem.css';

function Todo(props) {
	const { content, id } = props;
	return (
		<div className="content-todos">
			{content}
			<button className="destroy" onClick={() => props.onDelete(id)}>
				Sil
			</button>
		</div>
	);
}

export default Todo;
