import axios from 'axios';
import { useState } from 'react';

export default function Upload() {
    const [file, setFile] = useState();
    
    const upload = async () => {
        if (!file) {
            alert('Please select a file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:5005/upload/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('File uploaded successfully');
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        }
    };
    
    return (
        <div>
            <h1>Upload a Document</h1>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            />
            <button onClick={upload}>Upload</button>
        </div>
    );
}