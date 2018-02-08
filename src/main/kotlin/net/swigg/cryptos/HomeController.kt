package net.swigg.cryptos

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping

@Controller
@RequestMapping(value = ["/"])
class HomeController {
	@GetMapping(name = "home")
	fun home(): String {
		return "home/home"
	}
}