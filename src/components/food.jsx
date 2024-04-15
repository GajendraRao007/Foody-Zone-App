import eggimg from '../Images/egg.png';
import ramenimg from '../Images/ramen.png';
import grilledimg from '../Images/grilled.png';
import cakeimg from '../Images/cake.png';
import burgerimg from '../Images/burger.png';
import pancakeimg from '../Images/pancake.png';

function Food(){
    const food = [{ 
        image : eggimg,
        name : 'Boiled Eggs',
        info : 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ',
        price : '$10.00'
    },{
        image : ramenimg,
        name : 'RAMEN',
        info : 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ',
        price : '$25.00'
    },{
        image : grilledimg,
        name : 'GRILLED CHICKEN',
        info : 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ',
        price : '$45.00'
    },{
        image : cakeimg,
        name : 'CAKE',
        info : 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ',
        price : '$18.00'
    },{
        image : burgerimg,
        name : 'BURGER',
        info : 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ',
        price : '$23.00'
    },{
        image : pancakeimg,
        name : 'PANCAKE',
        info : 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ',
        price : '$25.00'
    }]


    return(
        <div className="food">

            
            {food.map((item)=>(

                <div key={item.id} className="food-box">
                <div>
                <img src={item.image} alt="" srcset="" />
                </div>
            <div>
            <h1 className="name">{item.name}</h1> 
                <p className="info ">{item.info}</p>
                <button className="price">{item.price}</button>
            </div>
            </div>
            
            ))}
                
       </div>
        
    )
}

export default Food;