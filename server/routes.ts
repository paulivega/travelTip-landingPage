import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertNewsletterSignupSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Newsletter signup endpoint
  app.post("/api/newsletter-signup", async (req, res) => {
    try {
      const validatedData = insertNewsletterSignupSchema.parse(req.body);
      
      // Check if email already exists
      const existingSignup = await storage.getNewsletterSignupByEmail(validatedData.email);
      if (existingSignup) {
        return res.status(400).json({ 
          message: "Este correo ya está registrado en nuestra lista de noticias." 
        });
      }

      const signup = await storage.createNewsletterSignup(validatedData);
      res.status(201).json({ 
        message: "¡Perfecto! Te hemos agregado a nuestra lista. Te contactaremos pronto con noticias emocionantes.",
        signup: { id: signup.id, email: signup.email }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Por favor, ingresa un correo electrónico válido." 
        });
      }
      res.status(500).json({ 
        message: "Error interno del servidor. Por favor, intenta nuevamente." 
      });
    }
  });

  // Get all newsletter signups (for admin purposes)
  app.get("/api/newsletter-signups", async (req, res) => {
    try {
      const signups = await storage.getAllNewsletterSignups();
      res.json(signups);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las suscripciones." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
