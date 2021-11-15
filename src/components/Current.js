import React, {useState} from 'react';

function Current() {

    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState('Default text');

	return <section className="current-section">
                    <div className="current-section__container container">
                            <p>{isEdit ? <input value={value} onChange={e=> setValue(e.target.value)}/> : <span>{value}</span>}</p>
                            <button onClick={()=> setIsEdit(!isEdit)}>{isEdit ? 'Сохранить изменения' : 'Редактировать'}</button>
                    </div>
	</section>;
}

export default Current;