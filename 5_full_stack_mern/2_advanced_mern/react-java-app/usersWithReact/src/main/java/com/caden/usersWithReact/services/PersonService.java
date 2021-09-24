package com.caden.usersWithReact.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caden.usersWithReact.models.Person;
import com.caden.usersWithReact.repositories.PersonRepository;

@Service
public class PersonService {
	@Autowired
	private PersonRepository pRepo;
	
	public List<Person> allUsers(){
		return this.pRepo.findAll();
	}
	public Person createPerson(Person person) {
		return this.pRepo.save(person);
	}
	public Person findUserById(Long id) {
    	return pRepo.findById(id).orElse(null);
    }
	public Person updatePerson(Person person) {
		return this.pRepo.save(person);
	}
	public void deletePerson(Long id) {
		this.pRepo.deleteById(id);
	}

}
