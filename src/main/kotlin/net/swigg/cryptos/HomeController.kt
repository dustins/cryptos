package net.swigg.cryptos

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody

@Controller
@RequestMapping(value = ["/auth"])
class AuthController {
	@ResponseBody
	@GetMapping(name = "/can")
	fun home(): Boolean {
		return true
	}
}