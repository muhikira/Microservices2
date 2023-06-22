package com.muhikira.employeeservice.service;

import com.muhikira.employeeservice.dto.APIResponseDto;
import com.muhikira.employeeservice.dto.EmployeeDto;
public interface EmployeeService {
    EmployeeDto saveEmployee(EmployeeDto employeeDto);

    APIResponseDto getEmployeeById(Long employeeId);
}
