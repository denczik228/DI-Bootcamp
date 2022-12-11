
import React from "react";
import {connect} from 'react-redux'
import {insert_trx, update_trx} from '../redux/actions'

class TransactionForm extends React.Component {
    constructor(){
        super()
        this.state = {
            account: '',
            fsc:'',
            name:'',
            amount:''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
    e.preventDefault() 
    if (this.props.currentIndex === -1) {
        this.props.handleInsert(this.state)
    } 
    else{
        this.props.handleUpdate(this.state)
    }  
    this.setState({
        account:'',
        fcs:'',
        name:'',
        amount:''
    })  
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log('prevProps:', prevProps);
        console.log('prevSate:', prevState);
        if(prevProps.currentIndex != this.props.currentIndex && this.props.currentIndex != -1){
            const trx = this.props.list[this.props.currentIndex]
            console.log('trx:', trx);
            this.setState({
                account:trx.account || '',
                fcs: trx.fcs || '',
                name:trx.name || '',
                amount: trx.amount ||''   
            })
        }

    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input name={this.state.account} placeholder='Account Number' onChange={this.handleChange} type='text'/><br/>
                <input name={this.state.fsc} placeholder='FSC' onChange={this.handleChange} type='text'/><br/>
                <input name={this.state.name} placeholder='Name' onChange={this.handleChange} type='text'/><br/>
                <input name={this.state.amount} placeholder='Amount' onChange={this.handleChange} type='text'/><br/>
                <input type='submit' value={this.props.currentIndex===-1?'Submit':'Update'}/>
            </form>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        currentIndex: state.currentIndex,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        handleInsert: (trx) => dispatch(insert_trx(trx)),
        handleUpdate: (trx) => dispatch(update_trx(trx))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)