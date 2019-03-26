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
	private String imagePath;
	
	//@JsonIgnore
	@OneToMany(mappedBy="gameConsole")
	private Collection<Game> games;
	
	public GameConsole() {
		
	}
	
	
	public GameConsole(String consoleName, String shortName, String imagePath) {
		
		this.consoleName = consoleName;
		this.shortName = shortName;
		this.games  = new ArrayList<Game>();
		this.imagePath = imagePath;
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
	
	public String getImagePath() {
		return imagePath;
	}




	public Long getId() {
		// TODO Auto-generated method stub
		return id;
	}

	@Override
	public String toString() {
		return "GameConsole [id=" + id + ", consoleName=" + consoleName + ", shortName=" + shortName + ", imagePath="
				+ imagePath + ", games=" + games + "]";
	}


	
	
	
	
}
