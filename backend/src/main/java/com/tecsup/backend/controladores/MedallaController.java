package com.tecsup.backend.controladores;
import com.tecsup.backend.modelo.entidades.Medalla;
import com.tecsup.backend.servicios.MedallaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/medallas")
public class MedallaController {

    @Autowired
    private MedallaService medallaService;

    @GetMapping("/usuario/{usuarioId}")
    public List<Medalla> obtenerMedallasPorUsuario(@PathVariable Long usuarioId) {
        return medallaService.obtenerMedallasPorUsuario(usuarioId);
    }

    @GetMapping("/sesion/{sesionId}")
    public List<Medalla> obtenerMedallasPorSesion(@PathVariable Long sesionId) {
        return medallaService.obtenerMedallasPorSesion(sesionId);
    }
}