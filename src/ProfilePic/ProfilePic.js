import ProfileP from '../pic.jpg'
import '../ProfilePic.css'
function ProfilePic(){
    return(
        <div >
            <img className='prof' src= {ProfileP} alt='pic'></img>
        </div>
    )
}
export default ProfilePic