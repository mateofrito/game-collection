package io.mattfry.gamecollector;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import io.mattfry.gamecollector.models.Game;
import io.mattfry.gamecollector.models.GameConsole;
import io.mattfry.gamecollector.repositories.ConsoleRepository;
import io.mattfry.gamecollector.repositories.GameRepository;

@Service
public class Initializer implements CommandLineRunner {
	
	@Resource
	ConsoleRepository consoleRepo;
	
	@Resource
	GameRepository gameRepo;
	

	@Override
	public void run(String... args) throws Exception {
		GameConsole console1 = consoleRepo.save(new GameConsole("Nintendo Entertainment System", "NES"));
		GameConsole console2 = consoleRepo.save(new GameConsole("Super Nintendo Entertainment System", "SNES"));
		
		Game game1 = gameRepo.save(new Game("Super Mario Bros 3", console1, "1989", "imagesmb3"));
		Game game2 = gameRepo.save(new Game("Super Mario World", console2, "1992", "imagesmw"));
		
	}

}
