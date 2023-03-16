package com.hr.portal.city.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="country")
public class CountryEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int country_id;
	
	@OneToMany
	private List<StateEntity> state;

	public int getCountry_id() {
		return country_id;
	}

	public void setCountry_id(int country_id) {
		this.country_id = country_id;
	}

	public List<StateEntity> getState() {
		return state;
	}

	public void setState(List<StateEntity> state) {
		this.state = state;
	}
	
}
