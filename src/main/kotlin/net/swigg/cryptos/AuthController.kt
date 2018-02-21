package net.swigg.cryptos

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Mono
import java.security.Principal

@RestController
@RequestMapping("/auth")
class AuthController
{
	@GetMapping("/current")
	fun current(principal: Principal?): Mono<Principal> {
		return principal?.let { Mono.just(principal) } ?: Mono.empty()
	}
}