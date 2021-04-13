import React,{Component} from 'react';
import logo from './TaskBoardImage.png';
import Profile from './Profile';

class Navigationbar extends Component{
    render(){
        return(
            <div>
                <div className="navigation_bar">
                    <div style={{width: '100px', height: '100px'}}>
                    <img src={logo} width="85%" height="85%" style={{margin: '7px'}}  />  
                    </div>
                    <p className="navigation_bar_content">TasksBoard</p>
                    <Profile logout={this.props.logout}/>
                </div>
            </div>
        );
    }
}
export default Navigationbar;