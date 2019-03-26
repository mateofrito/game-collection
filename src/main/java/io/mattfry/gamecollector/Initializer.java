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
		GameConsole console4 = consoleRepo.save(new GameConsole("Nintendo GameCube", "GCN"));
		GameConsole console5 = consoleRepo.save(new GameConsole("Nintendo Wii", "Wii"));
		GameConsole console7 = consoleRepo.save(new GameConsole("Nintendo Wii U", "Wii U"));
		
		Game game4 = gameRepo.save(new Game("Super Mario Bros", "1985", "http://mattfry.io/gameimages/smb.jpg", console1));
		Game game5 = gameRepo.save(new Game("Super Mario Bros 2", "1987", "http://mattfry.io/gameimages/smb2.jpg", console1));
		Game game1 = gameRepo.save(new Game("Super Mario Bros 3", "1989", "http://mattfry.io/gameimages/smb3.jpg", console1));
		Game game2 = gameRepo.save(new Game("Super Mario World", "1992", "http://mattfry.io/gameimages/smw.jpg", console2));
		Game game6 = gameRepo.save(new Game("Super Mario World 2: Yoshi's Island", "1994", "http://mattfry.io/gameimages/smw2.jpg" ,console2));
		Game game3 = gameRepo.save(new Game("Super Mario 64", "1996", "http://mattfry.io/gameimages/sm64.jpg" , console3));
		Game game7 = gameRepo.save(new Game("Super Mario Sunshine", "2001", "http://mattfry.io/gameimages/sms.jpg", console4));
		Game game8 = gameRepo.save(new Game("Paper Mario: And the Thousand Year Door", "2003", "http://mattfry.io/gameimages/papermario1000.jpg", console4));
		Game game9 = gameRepo.save(new Game("Super Mario Galaxy", "2008", "http://mattfry.io/gameimages/smg1.jpg", console5));
		Game game10 = gameRepo.save(new Game("Super Mario Galaxy 2", "2010", "http://mattfry.io/gameimages/smg2.jpg", console5));
		Game game11 = gameRepo.save(new Game("New Super Mario Bros. Wii", "2009", "http://mattfry.io/gameimages/nsmwii.jpg", console5));
		Game game12 = gameRepo.save(new Game("New Super Mario Bros. U", "2012", "http://mattfry.io/gameimages/nsmbu.jpg", console7));
		Game game13 = gameRepo.save(new Game("Super Mario 3D World", "2014", "http://mattfry.io/gameimages/sm3Dw.jpg", console7));
		Game game14 = gameRepo.save(new Game("Paper Mario", "1997", "http://mattfry.io/gameimages/papermario64.jpg", console3));
	
	}

}
