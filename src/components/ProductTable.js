import React, {useState} from 'react';
import { nanoid } from 'nanoid'

function ProductTable() {
    const initProds = [
        {id: nanoid(10), name: 'Product1', catg: 'Category1', cost: 1100},
        {id: nanoid(10), name: 'Product2', catg: 'Category2', cost: 1500},
        {id: nanoid(10), name: 'Product3', catg: 'Category3', cost: 2300},
    ];

    function creatingTemplate() {
        return {
            id: nanoid(10),
            name: '',
            catg: '', 
            cost: '',
        }
    }

    const [table, setTable] = useState(initProds);

    const [obj, setObj] = useState(creatingTemplate());
    const [editID, setEditID] = useState(null);
    const [warningText, setWarningText] = useState('');

    const productsTable = table.map(item=> {
        return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.catg}</td>
                    <td>{item.cost}</td>
                    <td className="pointerItem" onClick={()=> deleteItem(item.id)}>Удалить</td>
                    <td className="pointerItem" onClick={()=> setEditID(item.id)}>Редактировать</td>
                </tr>
    });

    function deleteItem(deleteID) {
        setTable(table.filter(tableItem=> {
            if (tableItem.id !== deleteID) {
                return tableItem;
            }
        }));
        warningTextShow('Элемент '+deleteID+' удален!');
    };


    function addItem() {
            for (let objItem in obj) {
                 let item = obj[objItem].trim();
                if(item.length === 0) {
                    warningTextShow('Не все поля заполнены!');
                    setObj(creatingTemplate());
                    return;
                    
                }
            }
            setTable([...table, obj]);
            warningTextShow('Элемент добавлен!');
            setObj(creatingTemplate());
    };

    function getEditValue(prop) {
        return table.reduce((total, item)=> {
            if (editID === item.id) {
                return  item[prop];
            } 
            else {
                return total;
            }
        }, '')
    }

    function changingValue(e, prop) {
        setTable(table.map(item => {
            if (item.id === editID) {
                return {...item, [prop]: e.target.value};
            } else {
                return item;
            }
        }));
    }

    function closeEdit() {
        setEditID(null);
        warningTextShow('Элемент отредактирован!');
    }

    function setObjFunc(e, prop) {
        setObj({...obj, [prop]: e.target.value});
    }

    function warningTextShow(text) {
        setWarningText(text);
        let timeDelay = setTimeout(()=>setWarningText(''), 3000);
    }
	
	return <section className="product-table">
        <div className="product-table__container container">
            <table>
                <thead>
                    <tr>
                        <td>ID продукта:</td>
                        <td>Название продукта:</td>
                        <td>Категория:</td>
                        <td>Цена:</td>
                        <td> </td>
                        <td> </td>
                    </tr>
                </thead>
                <tbody>
                    {productsTable}
                </tbody>
            </table>
            {editID ? <input value={getEditValue('name')} onChange={e=> changingValue(e, 'name')}></input> : <input value={obj.name} onChange={e=> setObjFunc(e, 'name')}></input>}
            {editID ? <input value={getEditValue('catg')} onChange={e=> changingValue(e, 'catg')}></input> : <input value={obj.catg} onChange={e=> setObjFunc(e, 'catg')}></input>}
            {editID ? <input value={getEditValue('cost')} onChange={e=> changingValue(e, 'cost')}></input> : <input value={obj.cost} onChange={e=> setObjFunc(e, 'cost')}></input>}
            {editID && <button onClick={closeEdit}>Сохранить</button>}
            {!editID && <button onClick={addItem}>Добавить элемент</button>}
            <p>{warningText}</p>
        </div>
	</section>;
}

export default ProductTable;