package com.hr.portal.city.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hr.portal.city.entities.CityEntity;

@Repository
public interface CityRepo extends JpaRepository<CityEntity,Integer>{
	
	List<CityEntity> findByStateId(@Param("id") Integer id);

}