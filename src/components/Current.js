import React, {useState} from 'react';
import { nanoid } from 'nanoid'

function Current() {

        const initNotes = [
                {
                        id: nanoid(10),
                        name: 'name1',
                        description: 'Very long description',
                        visible: false,
                },
                {
                        id: nanoid(10),
                        name: 'name1',
                        description: 'Very long description',
                        visible: false,
                },
                {
                        id: nanoid(10),
                        name: 'name1',
                        description: 'Very long description',
                        visible: false,
                },
        ]

        const [list, setList] = useState(initNotes);
        const result = list.map(item=> {
                return <li key={item.id}>
                                {item.name}
                                <br/>
                                {item.visible && item.description}
                                <br/>
                                <button onClick={()=> showDescription(item.id)}>{item.visible ? 'Скрыть описание' : 'Показать описание'}</button>
                        </li>
        });

        function showDescription(itemID) {
                setList(list.map(listItem => {
                        if (listItem.id === itemID) {
                                return {...listItem, visible: !listItem.visible};
                        } else {
                                return listItem;
                        }
                }));
        }

	return <section className="current">
                <div className="current__container container">
                        <ul>
                                {result}      
                        </ul>
                </div>
	</section>;
}

export default Current;