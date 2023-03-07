package com.example.codeengine.expense.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="category")
public class Category {

	@Id
	private Long id;
	
	@NonNull
	private String name;

	@OneToMany(mappedBy= "category") 
	private List<Expense> expense;

	public Long getId() {
		// TODO Auto-generated method stub
		return this.id;
	}

	public String getName() {
		// TODO Auto-generated method stub
		return this.name;
	}


	

	
	
}
