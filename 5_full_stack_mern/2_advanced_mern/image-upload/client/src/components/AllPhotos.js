import React, {useEffect, useState} from "react";
import axios from 'axios';

const AllPhotos = (props) => {
    const [photoList, setPhotList] = useState([]);
    const [newImage, setNewImage] = useState(
        {
            title: '',
            img: '',
        }
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', newImage.title);
        formData.append('img', newImage.img);

        axios.post('http://localhost:8000/single', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        setNewImage({...newImage, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewImage({...newImage, img: e.target.files[0]});
    }
    useEffect(() => {
        axios.get('http://localhost:8000/')
        .then((res) => {
            console.log(res.data);
            setPhotList(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="img"
                onChange={handlePhoto}
            />

            <input 
                type="text"
                placeholder="title"
                name="title"
                value={newImage.title}
                onChange={handleChange}
            />
            <input 
                type="submit"
            />
        </form>
            <h1>All Photos</h1>
            <div>
                {
                    photoList.map((photo, idx) => (
                        <div>
                            <p>{photo.title}</p>
                            <img src={photo.img} alt="photo"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default AllPhotos;