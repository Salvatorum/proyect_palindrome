# Identificador de Palíndromos

[![dtF9UmJ.md.png](https://iili.io/dtF9UmJ.md.png)](https://proyect-palindrome.netlify.app/)

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=netlify)](https://proyect-palindrome.netlify.app/)
[![CI/CD Pipeline](https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions)](https://github.com/Salvatorum/proyect_palindrome/actions)
[![Dockerized](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)](Dockerfile)

## 💻 Sobre la Aplicación
Una aplicación web interactiva desarrollada en Vanilla JavaScript que evalúa secuencias de caracteres.
- **Características:** Verifica si una palabra o frase es un palíndromo, ignorando espacios y signos de puntuación mediante expresiones regulares.
- **Interfaz:** Diseño amigable, responsivo y centrado en la experiencia del usuario (UX).

---

## ⚙️ Arquitectura NetDevOps (Prueba de Concepto)
Además de la versión alojada en Netlify, este repositorio funciona como un laboratorio de **Integración y Despliegue Continuo (CI/CD)** para entornos On-Premise.

El despliegue está 100% automatizado mediante una arquitectura que conecta la nube con un servidor local de forma segura:

1. **Integración Continua (CI):** Cada `git push` a la rama `main` activa un workflow de GitHub Actions que evalúa el código.
2. **Containerización:** Se utiliza un `Dockerfile` para empaquetar la aplicación estática dentro de un servidor web ultra ligero (`nginx:alpine`).
3. **Despliegue Continuo (CD):** Un *GitHub Self-Hosted Runner* alojado en un servidor Arch Linux intercepta la compilación.
4. **Infraestructura Inmutable:** El servidor local destruye automáticamente el contenedor Docker anterior y despliega la nueva versión en el puerto 8080 en cuestión de milisegundos, sin intervención manual.

## 🛠️ Stack Tecnológico Completo
- **Front-End:** HTML5, CSS3, JavaScript.
- **Servidor Web:** Nginx.
- **Infraestructura & Orquestación:** Docker, Arch Linux.
- **Automatización:** GitHub Actions (CI/CD Pipeline).
