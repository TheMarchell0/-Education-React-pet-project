import React, {useState} from 'react';

function Current() {
       
       const [nameValue, setNameValue] = useState('');
       const [surnameValue, setSurnameValue] = useState('');
       const [birthdayValue, setBirthdayValue] = useState('');
       const [mailValue, setMailValue] = useState('');
       const [telValue, setTelValue] = useState('');

       function validate() {
              console.log(1);
       }

	return <section className="form-section">
                     <div className="form-section__container container">
                            <div className="sun">
                                   <div className="earth">
                                          <div className="moon"></div>
                                   </div>
                            </div>
                     </div>
	</section>;
}

export default Current;