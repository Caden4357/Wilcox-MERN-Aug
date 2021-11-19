import React, {useEffect, useState, useRef} from "react";
import axios from 'axios';

const AllPhotos = (props) => {
    const [photoList, setPhotList] = useState([]);
    const [file, setFile] = useState("");
    const [data, getData] = useState({name: "", path: ""});
    const picture = useRef();
    const [newImage, setNewImage] = useState({
        title: "",
        picture: ""
    })
    const handlePhoto = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setFile(file)
        console.log(e.target.name, e.target.files[0]);
        setNewImage({
            [e.target.name]: e.target.files[0].name
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)

        axios.post('http://localhost:8000/addPhoto', formData)
            .then(res => {
                console.log(res.data);
                getData({ name: res.data.name,
                    path: 'http://localhost:8000/images/' + res.data.path
                })
                console.log(res.data.path);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        setNewImage({...newImage, [e.target.name]: e.target.value});
    }

    // const handlePhoto = (e) => {
    //     setNewImage({...newImage, img: e.target.files[0]});
    // }
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
                ref={picture}
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