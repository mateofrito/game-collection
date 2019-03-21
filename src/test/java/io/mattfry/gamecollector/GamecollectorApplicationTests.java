package io.mattfry.gamecollector;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;

import io.mattfry.gamecollector.models.Game;
import io.mattfry.gamecollector.models.GameConsole;
import io.mattfry.gamecollector.repositories.ConsoleRepository;
import io.mattfry.gamecollector.repositories.GameRepository;


import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;


import java.util.Optional;

import javax.annotation.Resource;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class GamecollectorApplicationTests {
	@Resource
	private TestEntityManager entityManager;
	
	@Resource
	private ConsoleRepository consoleRepo;
	
	@Resource
	private GameRepository gameRepo;

	@Test
	public void shouldSaveandLoadConsole() {
		GameConsole testConsole = consoleRepo.save(new GameConsole("Nintendo Entertainment System", "NES"));
		Long consoleID = testConsole.getId();
		
		
		
		 	entityManager.persist(testConsole);
	        entityManager.flush();
	        entityManager.clear();
	        
	        Optional<GameConsole> consoleToFind = consoleRepo.findById(consoleID);
	        testConsole = consoleToFind.get();
	        
	        assertThat(testConsole.getConsoleName(), is("Nintendo Entertainment System"));
	
	}
	
	@Test
	public void shouldSaveandLoadGame() {
		GameConsole testConsole = consoleRepo.save(new GameConsole("Super Nintendo", "SNES"));
		Game testGame = gameRepo.save(new Game("Super Mario World", testConsole, "1992", "ImagePath"));
		Long gameID = testGame.getId();
		
		
		entityManager.persist(testGame);
        entityManager.flush();
        entityManager.clear();
        
        Optional<Game> gameToFind = gameRepo.findById(gameID);
        testGame = gameToFind.get();
        
        assertThat(testGame.getGameTitle(), is("Super Mario World"));
        
		
		
	}
}
