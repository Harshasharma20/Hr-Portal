package com.job.publishing.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.job.publishing.entities.SkillMaster;

@Repository
public interface SkillMasterRepo extends JpaRepository<SkillMaster,Integer> {

}
