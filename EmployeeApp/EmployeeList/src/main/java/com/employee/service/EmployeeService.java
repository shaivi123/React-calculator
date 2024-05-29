package com.employee.service;

import com.employee.entity.Employee;
import com.employee.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;


    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmp() {
        return employeeRepository.findAll();
    }

    public Employee updateEmp(Employee employee, int id) {
        Employee employee1 = employeeRepository.findById(id)
                .map(emp -> {emp.setName(employee.getName());
                            emp.setLocation(employee.getLocation());
                            emp.setDesignation(employee.getDesignation());
                            return employeeRepository.save(emp);
                }).orElseThrow(() -> new RuntimeException());
        return employee1;
    }

    public void removeEmp(int id) {
        employeeRepository.deleteById(id);
    }
}
