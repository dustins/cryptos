package net.swigg.cryptos

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.http.HttpStatus
import org.springframework.security.config.web.server.ServerHttpSecurity
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService
import org.springframework.security.core.userdetails.User
import org.springframework.security.web.server.SecurityWebFilterChain
import org.springframework.web.reactive.config.WebFluxConfigurer
import reactor.core.publisher.Mono


@SpringBootApplication
class CryptosApplication : WebFluxConfigurer {


	@Bean
	fun userDetailsRepository(): MapReactiveUserDetailsService {
		val admin = User.withDefaultPasswordEncoder()
		  .username("admin")
		  .password("admin")
		  .roles("ADMIN", "USER")
		  .build()

		val user = User.withDefaultPasswordEncoder()
		  .username("user")
		  .password("user")
		  .roles("USER")
		  .build()

		return MapReactiveUserDetailsService(admin, user)
	}

	@Bean
	fun springSecurityFilterChain(http: ServerHttpSecurity): SecurityWebFilterChain {
		http.authorizeExchange()
		  .pathMatchers("/", "/auth/current", "/public/**").permitAll()
		  .anyExchange().authenticated()
		  .and()
//		  .httpBasic()
//		  .and()
		  .formLogin()
			  .authenticationSuccessHandler({ webFilterExchange, authentication ->
				  val response = webFilterExchange.exchange.response
				  response.setStatusCode(HttpStatus.OK)
				  Mono.empty()
			  })
			  .authenticationFailureHandler({ webFilterExchange, exception ->
				  val response = webFilterExchange.exchange.response
				  response.setStatusCode(HttpStatus.FORBIDDEN)
				  Mono.empty()
			  })
			  .and()
		  .csrf()
		  	.disable()

		return http.build()
	}
}

fun main(args: Array<String>) {
	runApplication<CryptosApplication>(*args)
}