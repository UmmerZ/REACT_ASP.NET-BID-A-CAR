import React, { useState } from 'react';
import axios from "axios";

export const FileUpload = () => {
    const [file, setFile] = useState();
    const [imageID, setImageID] = useState();
    const [userID, setUserID] = useState();
    const [imageName, setImageName] = useState();

    const saveFile = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        //setImageID(e.target.files[0].id);
        setImageName(e.target.files[0].name);
        //setUserID(e.target.files[0].userID);
    };

    const uploadFile = async (e) => {
        console.log(file);
        const formData = new FormData();
        formData.append("ImageFile", file);
        //formData.append("UserID", userID);
        //formData.append("ImageID", imageID);
        formData.append("ImageName", imageName);

        try {
            const res = await axios.post("https://localhost:44314/api/file", formData);
            console.log(res);

        } catch (ex) {
            console.log(ex);
        }
    };
    return (
        <>
            <input type="file" onChange={saveFile} />
            <input type="button" value="upload" onClick={uploadFile} />
            </>)
            }

