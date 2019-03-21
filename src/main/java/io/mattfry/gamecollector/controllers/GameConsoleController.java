package io.mattfry.gamecollector.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.mattfry.gamecollector.models.GameConsole;
import io.mattfry.gamecollector.repositories.ConsoleRepository;

@RestController
@RequestMapping("/consoles")

public class GameConsoleController {
	
	@Resource
	ConsoleRepository consoleRepo;
	
	@GetMapping("")
	public Collection<GameConsole> getConsoles(){
		return (Collection<GameConsole>) consoleRepo.findAll();
		
	}
	
	@PostMapping("/add")
	public Collection<GameConsole> addGameConsole(@RequestBody String body) throws JSONException{
		
		JSONObject json = new JSONObject(body);
		String consoleName = json.getString("consoleName");
		String shortName = json.getString("shortName");
		
		consoleRepo.save(new GameConsole(consoleName, shortName));
		
		return(Collection<GameConsole>) consoleRepo.findAll();
		
		
		
	}
	

}
