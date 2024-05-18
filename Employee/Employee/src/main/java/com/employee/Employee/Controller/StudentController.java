package com.employee.Employee.Controller;

import com.employee.Employee.Entity.Student;
import com.employee.Employee.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins="http://localhost:4200")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/getAll")
    public List<Student> getAllDetails() {
        return studentService.getAllDetails();
    }
    @GetMapping("/getEmployeeById/{id}")
    public Optional<Student> getBankByid(@PathVariable Integer id){
        return studentService.getBankById(id);
    }

    @PostMapping("/AddEmployee")
    public Student addBank(@RequestBody Student student){
        return studentService.addBank(student);
    }

    @DeleteMapping("/DeleteEmployeeById/{id}")
    public void deleteBank(@PathVariable Integer id){
        studentService.deleteBank(id);
    }

    @PutMapping("/updateEmployeeById/{id}")
    public ResponseEntity<Student> updateBank(@PathVariable Integer id, @RequestBody Student student){
        Student std= studentService.updateBank(id,student);

        if(std != null){
            return ResponseEntity.ok(std);
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}
