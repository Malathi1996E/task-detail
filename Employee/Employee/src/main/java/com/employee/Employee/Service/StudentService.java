package com.employee.Employee.Service;

import com.employee.Employee.Entity.Student;
import com.employee.Employee.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class StudentService {


    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllDetails(){
        return studentRepository.findAll();
    }

    public Optional<Student> getBankById(Integer id){
        return studentRepository.findById(id);
    }

    public Student addBank(Student student){
        return studentRepository.save(student);
    }

    public void deleteBank(Integer id){
        studentRepository.deleteById(id);
    }
    public Student updateBank(Integer id,Student student){
        Optional <Student > ba= studentRepository.findById(id);
        if(ba.isPresent()){
            Student std=ba.get();
            std.setName(student.getName());
            std.setDob(student.getDob());
            std.setJdate(student.getJdate());
            std.setClas(student.getClas());
            return studentRepository.save(std);
        }else {
            return null;
        }

    }
}
