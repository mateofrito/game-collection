package io.mattfry.gamecollector.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Game {
	
	@Id
	@GeneratedValue
	private Long id;

	private String gameTitle;
	
	@ManyToOne
	@JsonIgnore
	private GameConsole gameConsole;
	private String yearReleased;
	private String imagePath;

	
    public Game() {}
    
    
	
	




	public Game(String gameTitle, GameConsole gameConsole, String yearReleased, String imagePath) {
			this.gameTitle = gameTitle;
			this.gameConsole = gameConsole;
			this.yearReleased = yearReleased;
			this.imagePath = imagePath;

	}
	
	public GameConsole getConsoleName(){
		return gameConsole;
		
	}


	public Long getId() {
		return id;
	}

	public String getGameTitle() {
		return gameTitle;
	}
	
	

	@Override
	public String toString() {
		return "Game [gameTitle=" + gameTitle + ", gameConsole=" + gameConsole + ", yearReleased=" + yearReleased
				+ ", imagePath=" + imagePath + "]";
	}
}
