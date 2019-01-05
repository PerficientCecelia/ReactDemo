import React,{Component} from 'react';
import AppTest from './AppTest';



class App extends Component {
    constructor(props){
        super(props);
       }
        
       render(){
        const setting={
            settingname:"this is my foot"
          };
        return (
            <AppTest {...setting}/>
          );
       }   
}

export default App;