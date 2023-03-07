package com.example.codeengine.expense.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.codeengine.expense.model.Category;

public interface CategoryRepository extends JpaRepository<Category,Long>{

	public Category findByName(String name);
}
