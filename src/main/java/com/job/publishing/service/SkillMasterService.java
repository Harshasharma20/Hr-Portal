package com.job.publishing.service;

import java.util.List;

import com.job.publishing.entities.SkillMaster;

public interface SkillMasterService {
	
	public SkillMaster createskill(SkillMaster skillMaster);
	
	public List<SkillMaster> getAllSkill();
	
	public SkillMaster updateSkill(SkillMaster skillMaster,int id);
	
	public void deleteSkill(int skillId);

}
