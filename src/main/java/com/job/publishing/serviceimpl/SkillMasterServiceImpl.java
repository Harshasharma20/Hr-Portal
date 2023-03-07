package com.job.publishing.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.job.publishing.entities.SkillMaster;
import com.job.publishing.repo.SkillMasterRepo;
import com.job.publishing.service.SkillMasterService;

@Component
public class SkillMasterServiceImpl implements SkillMasterService{
	
	@Autowired
	public SkillMasterRepo skillMasterRepo;

	@Override
	public SkillMaster createskill(SkillMaster skillMaster) {
		SkillMaster master=this.skillMasterRepo.save(skillMaster);
		return master;
	}

	@Override
	public List<SkillMaster> getAllSkill() {
		List<SkillMaster> skills=this.skillMasterRepo.findAll();
		return skills;
	}

	@Override
	public SkillMaster updateSkill(SkillMaster skillMaster, int id) {		
		return this.skillMasterRepo.save(skillMaster);
	}

	@Override
	public void deleteSkill(int skillId) {
		this.skillMasterRepo.deleteById(skillId);
		
	}

	

	
	
	
	

}
