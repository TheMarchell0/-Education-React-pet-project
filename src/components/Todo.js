import React, { useState } from 'react';

function Todo() {

	const [arr, setArr] = useState([{text: 'Встать', edit: false}, {text: 'Открыть глаза', edit: false}, {text: 'Умыться', edit: false}, {text: 'Побриться', edit: false}, {text: 'Поесть', edit: false}]);
	const [value, setValue] = useState('');
	const arrHTML = arr.map((item,index)=> { 
		return <li key={index}>{item.edit ? <input value={item.text} onChange={(e)=> changeText(e.target.value, index)} onBlur={()=> closeEdit(index)}/> : <p><span onClick={()=> startEdit(index)}>{index+1} - {item.text}</span><span className="todo-close" onClick={()=> deletion(index)}>X</span></p>}</li>	
	});


	function changeText(newText, index) {
		let copy = Object.assign([], arr);
		copy[index].text = capitalLetter(newText);
		setArr(copy);
	}

	function startEdit(index) {
		let copy = Object.assign([], arr);
		copy[index].edit = true;
		setArr(copy);
	}

	function closeEdit(index) {
		let copy = Object.assign([], arr);
		copy[index].edit = false;
		setArr(copy);
	}

	function addNew() {
		let cleanValue = value.trim();
		if (valueIsValid(cleanValue, false)) {
			cleanValue = 
			setArr([...arr, {text: capitalLetter(cleanValue), edit: false}]);
			setValue('');	
		};
	}

	function deletion(deleteIndex) {
		setArr([...arr.slice(0, deleteIndex), ...arr.slice(deleteIndex+1)]);
	}

	function valueIsValid(checkingItem, checkingNumber) {
		if (checkingItem.length == 0) {
			alert('Значение инпута пусто!');
			return false;
		}
		if (checkingNumber) {
			if (!(Number(checkingItem))) {
				setValue('');
				alert('Введённое значение - не число!');
				return false;
			}
			if (checkingItem > arr.length) {
				setValue('');
				alert('Элемента под таким номером не существует!');
				return false;
			}
		}
		return true;
	}

	function capitalLetter(word) {
		return word.slice(0,1).toUpperCase() + word.slice(1);
	}
	
	return <section className="todo">
		<ul>
			{arrHTML}
		</ul>
		<input value={value} onChange={e=> setValue(e.target.value)}/>
		<button onClick={addNew}>Добавить</button>
	</section>;
}

export default Todo;