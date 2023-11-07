import { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AddBlog = () => {
    const { user } = useContext(AuthContext)
    const navigate =useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        imageUrl: '',
        category: '',
        shortDescription: '',
        longDescription: '',

    });

    const handleChange = (e) => {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        const currentTime = new Date().toISOString();

        const blogData = {
            ...formData,
            email:user.email, 
            OwnerName: user.displayName,
            ownerPhoto: user.photoURL,
            timestamp: currentTime,
        };

        try {
            const response = await fetch('http://localhost:5000/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blogData),
            });
            console.log(response)

            if (response.ok) {
                toast('Blog created successfully')
                navigate('/')
                console.log('Blog created successfully');
            } 
        } catch (error) {
            toast.error('Error creating blog:', error)
            console.error('Error creating blog:', error);
        }
    };

    return (
        <div className='justify-center flex w-[100%] my-20 mx-auto'>
            
            <div className='md:w-[50%]'>
            <form onSubmit={handleSubmit}>
                <div className='my-6'>
                
                    <label className='label-text font-semibold me-3'>Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="input input-bordered w-[50%] text-xs h-[30px] mx-auto rounded-none"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='my-6'>
                    <label className='label-text font-semibold me-3' htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        className="input input-bordered w-[50%] h-[30px] mx-auto rounded-none"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='my-6'>
                    <label className='label-text font-semibold me-3' htmlFor="category">Category:</label>
                    <select
                        id="category"
                        name="category"
                        className="input input-bordered w-[50%] h-[30px] mx-auto rounded-none"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="Travel">Travel</option>
                        <option value="Lifestyle">Lifestyle</option>
                        <option value="Food and Cooking">Food and Cooking</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Health and Fitness">Health and Fitness</option>
                        <option value="Technology">Technology</option>
                        <option value="Parenting">Parenting</option>
                        <option value="Personal Development">Personal Development</option>
                        <option value="History and Culture">History and Culture</option>
                        <option value="Astronomy">Astronomy</option>
                    </select>
                </div>
                <div className='my-6'>
                    <label className='label-text font-semibold me-3' htmlFor="shortDescription">Short Description:</label>
                    <input
                        type="text"
                        id="shortDescription"
                        name="shortDescription"
                        className="input input-bordered w-[50%] h-[30px] text-xs mx-auto rounded-none"
                        value={formData.shortDescription}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='my-6'>
                    <label className='label-text font-semibold me-3' htmlFor="longDescription">Long Description:</label>
                    <textarea
                        id="longDescription"
                        name="longDescription" 
                        className="input input-bordered w-[50%] h-[100px] text-xs mx-auto rounded-md"
                        value={formData.longDescription}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <button className="bg-[#84558d] text-white  w-[50%] h-[30px] mx-auto  "
                            type="submit" value="Submit">Submit</button>
                </div>
            </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddBlog;

