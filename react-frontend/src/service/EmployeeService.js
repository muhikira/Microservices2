import axios from 'axios'

const EMPLOYEE_SERVICE_BASE_URL = "localhost:9191/api/employees";
const EMPLOYEE_ID = 5;
class EmployeeService{
    getEmployee(){
        axios.get(EMPLOYEE_SERVICE_BASE_URL + '/' + EMPLOYEE_ID);
    }
}
export default new EmployeeService
