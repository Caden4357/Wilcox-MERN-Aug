package com.caden.usersWithReact.controllers;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.caden.usersWithReact.models.Person;
import com.caden.usersWithReact.repositories.PersonRepository;
import com.caden.usersWithReact.services.PersonService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PersonController {
	@Autowired
	PersonService pService;
	@Autowired
	PersonRepository pRepo;
	
	@GetMapping("/getAllPeople")
	public List<Person> Dashboard(@ModelAttribute("person") Person person){
		return this.pService.allUsers();	
	}
	@PostMapping("/createPerson")
	public Person newPerson(@RequestBody Person person) {
		return this.pService.createPerson(person);
	}
	
	@GetMapping("/getUser/{id}")
	public Person onePerson(@PathVariable("id")Long id) {
		System.out.println("From getmapping getuser/{id} ");
//		System.out.println(Artist thisUser.getArtists().getId());
//		User currentUser = uServ.findByEmail(email);
//		System.out.println(currentUser.getId());
		return this.pService.findUserById(id);
	}
	@PutMapping("/{id}/edit")
	public Person updatePerson(@PathVariable("id") Long id, @RequestBody Person updatePerson) {
		Person personToUpdate = this.pService.findUserById(id);
		personToUpdate.setName(updatePerson.getName());
		personToUpdate.setAge(updatePerson.getAge());
		return this.pRepo.save(personToUpdate);

	}
//	@PutMapping("/{id}/edit")
//    ResponseEntity<Person> updateGroup(@RequestBody Person person) {
////        log.info("Request to update group: {}", person);
//        Person result = this.pRepo.save(person);
//        return ResponseEntity.ok().body(result);
//    }

	
	
	@PostMapping("/{id}/delete")
	public String deletePerson(@PathVariable("id") Long id) {
		this.pService.deletePerson(id);
		return null;
	}


}
