import { Component } from "react";
import ColorItem from "./ColorItem";
class CP extends Component{
    constructor(){
        super();
        this.state={
            bool:false
        }
    }
    colors = ['red','#01fe00','blue','yellow','#ff00fe','aqua','#fea500','#81007f','pink','#008001','#fe6347','#01ced1','#8b4512','#ff8b00','#4682b4','#fed700'];
    setColor = (event) => {
        const currentColor=event.target.style.getPropertyValue('--bg-color');
        document.documentElement.style.setProperty('--bg-color',currentColor);
        document.documentElement.style.setProperty('--dp','none');
        this.setState({bool:true});
        // localStorage.setItem('--bg-color',currentColor);
    }
    chooseColor = () => {
        document.documentElement.style.setProperty('--dp','flex');
        this.setState({bool:false});
    }
    render(){
        return(
            <div className="kk">
                <h1>Color Picker</h1>
                <div className="picker">
                    <div className="color-items">
                        {this.colors.map((color,idx)=><ColorItem key={idx} setColor={this.setColor} color={color}/>)}
                    </div>
                    <button onClick={this.chooseColor}>Pick a Color</button>
                    {this.state.bool?<div className="click">Click the button</div>:null}
                </div>

            </div>
        );
    }
}
export default CP;