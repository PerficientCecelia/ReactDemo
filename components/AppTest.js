import React,{Component} from 'react';

export default class AppTest extends Component{
   constructor(props){
        super(props);
   }

   render(){
       return (
            <div> {this.props.settingname}</div>
       );
   }
}