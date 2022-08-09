import React, {Component} from 'react'

 class Fullname extends Component {

constructor() {

console.log ('constructor')
super();
this.state = {
Fullname :'',
intervall: null,
timer:0
}
}

componentDidCatch(){
    console.log('timer is mounted')
    this.setState({
     intervall : setInterval(()=> this.setState({
        timer: this.state.timer +1
     }),500)
    })
}


render(){
    return(
        <div>
            <h2> Timer </h2>
            <h3> HELOO</h3>

        </div>
    )
}
}

export default Fullname
