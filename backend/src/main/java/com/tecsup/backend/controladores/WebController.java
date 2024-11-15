package com.tecsup.backend.controladores;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    @GetMapping("/{path:[^\\.]*}")
    public String redirect() {
        return "forward:/";
    }
}