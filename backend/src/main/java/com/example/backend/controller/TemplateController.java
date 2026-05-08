package com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class TemplateController {

    @GetMapping("/templates")
    public List<Map<String, Object>> getTemplates() {
        return List.of(
                Map.of(
                        "id", 1,
                        "title", "Offer Letter",
                        "description", "Employee offer template"
                ),
                Map.of(
                        "id", 2,
                        "title", "NDA",
                        "description", "Confidential agreement"
                )
        );
    }
}