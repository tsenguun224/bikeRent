import React from 'react'
import {  Text,  SafeAreaView,Alert } from 'react-native'

export default class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timer: null,
            counter: 24,
        };
    }
    

    startTimer = () => {

        let timer = setInterval(this.manageTimer, 1000);
        this.setState({ timer });

    }

    manageTimer = () => {

        var states = this.state

        if (states.counter === 0) {
            Alert.alert("Rent time is over","Please check out your bill",[{text:'Check out', onPress:() => this.props.bikeRentCost()}])
            clearInterval(this.state.timer)
            this.setState({
                counter: 24
            })
        }
        else {
            this.setState({
                counter: this.state.counter - 1
            });

        }
    }
    componentDidMount(){
        const {pressed} = this.props
        
        if(pressed === true){
            this.startTimer()
        }
    }
    componentWillUnmount() {
        clearInterval(this.state.timer);
    }



    render() {
        return (
            <SafeAreaView>
                <Text>Bike rent time:</Text>
                <Text style={{ textAlign: 'center',fontSize:28 }}>{this.state.counter}</Text>
            </SafeAreaView>
        )
    }
}