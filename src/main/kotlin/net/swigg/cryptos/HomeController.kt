package net.swigg.cryptos

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody

@Controller
@RequestMapping(value = ["/"])
class HomeController {
	@GetMapping(name = "/")
	fun home(): String {
		return "home/home"
	}
}