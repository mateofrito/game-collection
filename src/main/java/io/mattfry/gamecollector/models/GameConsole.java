package io.mattfry.gamecollector.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class GameConsole {
	
	@Id
	@GeneratedValue
	private Long id;
	private String consoleName;
	private String shortName;
	
	//@JsonIgnore
	@OneToMany(mappedBy="gameConsole")
	private Collection<Game> games;
	
	public GameConsole() {
		
	}
	
	
	public GameConsole(String consoleName, String shortName) {
		
		this.consoleName = consoleName;
		this.shortName = shortName;
		this.games  = new ArrayList<Game>();
	}
	
	public String getConsoleName() {
		return consoleName;
	}
	
	public Collection<Game> getGame(){
		return games;
	}
	
	
	public String getShortName() {
		return shortName;
	}




	public Long getId() {
		// TODO Auto-generated method stub
		return id;
	}


	@Override
	public String toString() {
		return "GameConsole [id=" + id + ", consoleName=" + consoleName + ", shortName=" + shortName + "]";
	}
	
	
	
}
