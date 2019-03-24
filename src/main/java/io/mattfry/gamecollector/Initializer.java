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
		GameConsole console3 = consoleRepo.save(new GameConsole("Nintendo 64", "N64"));
		
		Game game1 = gameRepo.save(new Game("Super Mario Bros 3", "1989", "imagesmb3", console1));
		Game game2 = gameRepo.save(new Game("Super Mario World", "1992", "imagesmw", console2));
		Game game3 = gameRepo.save(new Game("Super Mario 64", "1996", "imagesm64" , console3));
		Game game4 = gameRepo.save(new Game("Super Mario Bros", "1985", "imagesmb", console1));
		Game game5 = gameRepo.save(new Game("Super Mario Bros 2", "1987", "imagesmb2", console1));
		Game game6 = gameRepo.save(new Game("Super Mario World 2: Yoshi's Island", "1994", "imagesmw2" ,console2));
		
		
	}

}
