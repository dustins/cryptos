package net.swigg.cryptos

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
open class CryptosApplication

fun main(args: Array<String>) {
	runApplication<CryptosApplication>(*args)
}