package com.example.codeengine.expense.model;

import java.time.Instant;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name="Expense")
public class Expense {
	
	@Id
	private Long id;
	
	private Instant expenseDate;
	private String description;
	private Long amount;
	
	@ManyToOne
	private Category category;
	
	@ManyToOne
	private User user;

	public Long getId() {
		// TODO Auto-generated method stub
		return this.id;
	}

	public Instant getExpenseDate() {
		// TODO Auto-generated method stub
		return this.expenseDate;
	}

	public String getDescription() {
		// TODO Auto-generated method stub
		return this.description;
	}

	public Long getAmount() {
		// TODO Auto-generated method stub
		return this.amount;
	}


}
