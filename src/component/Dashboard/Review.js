import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Review = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `https://salty-scrubland-12544.herokuapp.com/review`;
        fetch(url, {
            method: 'POST', 
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
           toast(' Review successfull')
           
        })
    }
    return (
        <div>
            <div>
                <h2>This is my review page</h2>
            </div>
            <form className="grid grid-cols-1 gap-3 justify-items-center mt-2" onSubmit={handleSubmit(onSubmit)}>
                <input value={user?.reloadUserInfo?.displayName} className="input input-bordered w-full max-w-xs" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <input className="input input-bordered w-full max-w-xs" placeholder="Type your review" type="textarea"{...register("review", {required:true})}  />
                <input className="input input-bordered w-full max-w-xs" placeholder="Rating" type="text" {...register("rating", {required:true})}/>
                
                <input className="btn btn-primary" placeholder="Name" type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default Review;