package net.swigg.cryptos

import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.http.MediaType.TEXT_HTML
import org.springframework.test.context.junit4.SpringRunner
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.content
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status

@RunWith(SpringRunner::class)
@WebMvcTest(HomeController::class)
class HomeControllerTest {
	@Autowired
	lateinit var mvc: MockMvc

	@Test
	fun home() {
		this.mvc.perform(get("/").accept(TEXT_HTML))
		  .andExpect(status().isOk)
		  .andExpect(content().contentTypeCompatibleWith(TEXT_HTML))
	}
}