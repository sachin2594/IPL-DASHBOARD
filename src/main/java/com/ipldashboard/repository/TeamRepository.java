package com.ipldashboard.repository;

import com.ipldashboard.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {

    Team findByTeamName(String teamName);
}
