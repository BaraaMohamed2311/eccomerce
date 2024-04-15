import './topbox.css';
import { topDealUsers } from '../../../data';
function TopBox(){
    return(
        <div className='top-deals'>
        <h1>Top Deals</h1>
        {topDealUsers.map(function(user){
            return(
                <div className='users-list' key={user.id}>
                    
                    <div className='user-data'>
                    <img src={user.img} alt="" />
                        <div className="data">
                        <div>{user.username}</div>
                        <div>{user.email}</div>
                        </div>
                    </div>
                    <div className='amount'>{user.amount}</div>
                </div>
            )
        })}
        </div>
    )
}

export default TopBox;