import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.css';

class Directory extends React.Component {
     constructor(){
        super();

        this.state = {
            sections:[
            {
             title:'hats',
             imageUrl:'https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
             id:1
            },
            {
                title:'jackets',
                imageUrl:'https://images.pexels.com/photos/5882683/pexels-photo-5882683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id:2
            },
            {
                title:'sneakers',
                imageUrl:'https://images.pexels.com/photos/461082/pexels-photo-461082.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                id:3
            },
            {
                title:'womens',
                imageUrl:'https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                size:'large',
                id:4
            },
            {
                title:'mens',
                imageUrl:'https://images.pexels.com/photos/5053849/pexels-photo-5053849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                size:'large',
                id:5
            }]
    }
    
}
render(){
    return(
      <div className='directory-menu'>
          {this.state.sections.map(({title, imageUrl, id,size})=>(
                  <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
              ))}
      </div>  
    );
 }
}
export default Directory;