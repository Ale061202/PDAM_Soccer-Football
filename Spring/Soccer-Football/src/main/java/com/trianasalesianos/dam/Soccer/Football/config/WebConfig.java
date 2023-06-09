package com.trianasalesianos.dam.Soccer.Football.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:4200", "http://localhost:8080")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "DELETE", "HEAD", "OPTIONS")
                        .allowedHeaders("X-Requested-With", "Content-Type", "Content-Length", "Authorization", "Access-Control-Allow-Headers", "Accept", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials")
                        .exposedHeaders("X-Requested-With", "Content-Type", "Content-Length", "Authorization", "Access-Control-Allow-Headers", "Accept", "Access-Control-Allow-Methods", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials")
                        .allowCredentials(true)
                        .maxAge(3600);
            }
        };
    }
}
