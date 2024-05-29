package com.employee.controller;

import com.employee.entity.Employee;
import com.employee.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/addEmp")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/getAll")
    public List<Employee> getAllEmp(){
        return employeeService.getAllEmp();
    }

    @PutMapping("/updateEmp/{id}")
    public Employee updateEmp(@RequestBody Employee employee, @PathVariable int id){
        return employeeService.updateEmp(employee, id);
    }

    @DeleteMapping("/removeEmp/{id}")
    public void removeEmp(@PathVariable int id){
        employeeService.removeEmp(id);
    }
}
