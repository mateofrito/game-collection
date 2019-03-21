package io.mattfry.gamecollector.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class GameConsole {
	
	@Id
	@GeneratedValue
	private Long id;
	private String consoleName;
	private String shortName;
	@OneToMany(mappedBy="gameConsole")
	private Collection<Game> game = new ArrayList<Game>();
	
	public GameConsole() {
		
	}
	
	
	public GameConsole(String consoleName, String shortName) {
		
		this.consoleName = consoleName;
		this.shortName = shortName;
		this.game = game;
	}
	
	public String getConsoleName() {
		return consoleName;
	}
	
	public Collection<Game> getGame(){
		return game;
	}
	
	
	public String getShortName() {
		return shortName;
	}




	public Long getId() {
		// TODO Auto-generated method stub
		return id;
	}
}
