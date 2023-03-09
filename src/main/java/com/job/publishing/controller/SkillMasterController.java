package com.job.publishing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.job.publishing.entities.SkillMaster;
import com.job.publishing.service.SkillMasterService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class SkillMasterController {
	
	@Autowired
	public SkillMasterService skillMasterService;
	
	@PostMapping("/create")
	public ResponseEntity<SkillMaster> createSkill(@RequestBody SkillMaster skill){
		System.out.println("================= /create");
		
		SkillMaster skillMaster = this.skillMasterService.createskill(skill);
		return new ResponseEntity<>(skillMaster,HttpStatus.OK);
	}
	
	@GetMapping("/getAllSkills")
	public ResponseEntity<List<SkillMaster>> getAllSkills(){		
		return ResponseEntity.ok(this.skillMasterService.getAllSkill());
		
	}
	
	@PutMapping("/{skill_id}")
	public ResponseEntity<SkillMaster> updateSkills(@RequestBody SkillMaster skillMaster,@PathVariable int skill_id){	
		return ResponseEntity.ok(this.skillMasterService.updateSkill(skillMaster, skill_id));
		
	}
	
	@DeleteMapping("/{skillId}")
	public void deleteSkill(@PathVariable int skillId){
		this.skillMasterService.deleteSkill(skillId);
	}

}
