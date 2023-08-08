import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';

class EmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            employee:{},
            department:{},
            organization:{}
        }

    }
    componentDidMount(){
        EmployeeService.getEmployee().then((Response)=>{
            this.setState({employee : Response.employee})
            this.setState({department: Response.department})
            this.setState({organization : Response.organization})

            console.log(this.state.employee)
            console.log(this.state.department)
            console.log(this.state.organization)
        })

    }

  render() {
    return (
      <div>

      </div>
    )
  }
}
