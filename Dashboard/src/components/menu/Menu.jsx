import { Link } from 'react-router-dom';
import './menu.css';
import { menu } from '../../../data';


function Menu(){
    return (
        <div className='menu'>
            { menu.map(function(item){
                return (
                <div className="item" key={item.id}>
                <span className='title'>{item.title}</span>
                {item.listItems.map(function(list){
                    return (
                    <Link to={list.url} className = "link" key={list.id}>
                    <ion-icon className="list-icon" name={list.icon}></ion-icon>
                    <span className="list-title">{list.title}</span>
                    </Link>
                    )
                })
            }
            </div>
                )
            })
            }
        </div>
        
    )
}

export default Menu;