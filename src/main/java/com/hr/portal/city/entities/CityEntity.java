package com.hr.portal.city.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="city")
public class CityEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int city_id;
	private String city_name;
	
	public int getCity_id() {
		return city_id;
	}
	public void setCity_id(int city_id) {
		this.city_id = city_id;
	}
	public String getCity_name() {
		return city_name;
	}
	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}
	public CityEntity(int city_id, String city_name) {
		super();
		this.city_id = city_id;
		this.city_name = city_name;
	}
	

}
