import React, {useState} from 'react';

function FileLoad() {

        const [inputFile, setInputFile] = useState('');
        const [fileSize, setFileSize] = useState('');

        function changeValue(e) {
                let fileValue = document.querySelector('.test-file__input').files[0];
                let fileName = e.target.value.split('\\').pop();
                if (fileName.length > 20) {
                        fileName = fileName.slice(0, 20)+'...';
                }
                let size = fileValue.size;
                setFileSize(size);
                if (size < 1024) {
                        setFileSize(size+'  B');
                } 
                else if (size >= 1024 && size < 1048576) {
                                setFileSize((size/1000).toFixed(1)+' KB');
                        }
                else if (size >= 1048576 && size < 1073741824) {
                        setFileSize((size/1000000).toFixed(1)+' MB');
                }
                else if (size >= 1073741824) {
                        removeFile();
                        alert('Вес файла слишком большой!');
                        return;
                }
                setInputFile(fileName);
        }

        function removeFile() {
                document.querySelector('.test-file__input').value = '';
                setInputFile('');
        }


	return <section className="fileLoad">
                <div className="fileLoad__container container">
                        <div className="test-file">
                                <p className="test-file__title">Файл: </p>
                                <div className="test-file__main">
                                        {!inputFile && <label htmlFor="test-file__input" className="test-file__label">Прикрепить файл</label>} 
                                        <input id="test-file__input" onChange={(e)=> changeValue(e)} className="test-file__input" type="file"></input>
                                        {inputFile && 
                                        <p className="test-file__file-name">{inputFile}
                                        <span className="test-file__file-size">{fileSize}</span>
                                        <span className="test-file__remove" onClick={removeFile}>X</span>
                                        </p>}
                                </div>
                        </div>
                </div>
	</section>;
}

export default FileLoad;