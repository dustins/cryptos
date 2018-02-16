package net.swigg.cryptos

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.reactive.config.ResourceHandlerRegistry
import org.springframework.web.reactive.config.WebFluxConfigurer
import org.springframework.web.reactive.resource.GzipResourceResolver

@SpringBootApplication
open class CryptosApplication

fun main(args: Array<String>) {
	runApplication<CryptosApplication>(*args)
}