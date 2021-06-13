package com.twitter.app.test.ex1.repo;

import com.twitter.app.test.ex1.model.City;
import com.twitter.app.test.ex1.model.Expense1;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CityRepository extends CrudRepository<Expense1, Long> {
    public List<Expense1> findByItem(String item);

    @Query("SELECT e FROM Expense1 e WHERE e.amount >= :amount")
    public List<Expense1> listItemsWithPriceOver(@Param("amount") float amount);
}
