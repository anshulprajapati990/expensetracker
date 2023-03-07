package com.example.codeengine.expense.model;


import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="user")
public class User {
	
	@Id
	private Long id;
	private String name;
	private String password;
	private String email;
	
	@OneToMany(mappedBy= "user") 
	private List<Expense> expense;

	public Long getId() {
		// TODO Auto-generated method stub
		return this.id;
	}
	
}
