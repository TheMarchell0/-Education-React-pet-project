import React, { useState } from 'react';

function Todo() {

	const [arr, setArr] = useState(['Встать', 'Открыть глаза', 'Умыться', 'Побриться', 'Поесть']);
	const [value, setValue] = useState('');
	const arrHTML = arr.map((item,index)=> {
		return <li key={index}>{index+1} - {item}</li>
	});

	function sortNew() {
		let arrCopy = Object.assign([], arr);
		arrCopy.sort();
		setArr(arrCopy);
	}

	function reverseNew() {
		let arrCopy = Object.assign([], arr);
		arrCopy.reverse();
		setArr(arrCopy);
	}

	function addNew() {
		let cleanValue = value.trim();
		if (valueIsValid(cleanValue, false)) {
			setArr([...arr, cleanValue]);
			setValue('');	
		};
	}

	function editNew() {
		let cleanValue = value.trim();
		if (valueIsValid(cleanValue, false)) {
			let [text, num] = cleanValue.split(',');
			num = Number(num);
			setArr([...arr.slice(0, num),text, ...arr.slice(num+1)]);
			setValue('');	
		};
	}

	function deleteNew() {
		let cleanValue = value.trim();
		if (valueIsValid(cleanValue, true)) {
			cleanValue = Number(cleanValue)-1;
			setArr([...arr.slice(0, cleanValue), ...arr.slice(cleanValue+1)]);
			setValue('');	
		};
	}

	function deleteAll() {
		setArr([]);	
	};

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
	
	return <section className="todo">
		<ul>
			{arrHTML}
		</ul>
		<input value={value} onChange={e=> setValue(e.target.value)}/>
		<button onClick={addNew}>Добавить</button>
		<button onClick={editNew}>Редактировать</button>
		<button onClick={sortNew}>Cортировать</button>
		<button onClick={reverseNew}>Перевернуть</button>
		<button onClick={deleteNew}>Удалить</button>
		<button onClick={deleteAll}>Удалить всё</button>
	</section>;
}

export default Todo;