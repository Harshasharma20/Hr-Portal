package com.job.publishing.entities;





import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name="skill_master")
public class SkillMaster {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int skill_id;
	private String skill_name;
	public int getSkill_id() {
		return skill_id;
	}
	public void setSkill_id(int skill_id) {
		this.skill_id = skill_id;
	}
	public String getSkill_name() {
		return skill_name;
	}
	public void setSkill_name(String skill_name) {
		this.skill_name = skill_name;
	}
	public SkillMaster(int skill_id, String skill_name) {
		super();
		this.skill_id = skill_id;
		this.skill_name = skill_name;
	}
	public SkillMaster() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
