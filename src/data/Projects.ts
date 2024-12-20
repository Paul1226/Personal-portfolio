export type Project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  linkGit: string;
  linkPage: string;
  summary: string;
};

export const projects: Project[] = [
  {
    name: "Movies TMDB",
    description:
      "Un sitio web interactivo donde los usuarios pueden buscar información sobre películas, ver detalles como la sinopsis, el elenco y las calificaciones. Integra una API para datos dinámicos y permite explorar contenido actualizado.",
    technologies: ["Astro", "TypeScript", "Css", "API REST"],
    image: "/images/project-movies.webp",
    linkGit: "https://github.com/Paul1226/MoviesTMDB",
    linkPage: "https://mymovies023.netlify.app/",
    summary:
      "Sitio interactivo para buscar películas, con sinopsis, elenco y calificaciones, integrando una API para datos dinámicos.",
  },
  {
    name: "Template Portfolio",
    description:
      "Un diseño moderno y responsivo para un portafolio personal, creado como base para personalizar y mostrar proyectos. Destaca por su enfoque en el diseño limpio y una estructura fácil de modificar.",
    technologies: ["Tailwind", "Astro"],
    image: "/images/project-template.webp",
    linkGit: "https://github.com/Paul1226/Template-Porfolio",
    linkPage: "https://template-porfolio.netlify.app/",
    summary:
      "Portafolio personal moderno, responsivo y personalizable, con diseño limpio y estructura fácil de modificar.",
  },
  {
    name: "Proyectos ConquerBlocks",
    description:
      "Una página centralizada donde se recopilan todos los proyectos desarrollados durante mi formación en la academia ConquerBlocks, con enlaces directos y descripciones de cada uno.",
    technologies: ["Astro", "Tailwind", "TypeScript"],
    image: "/images/project-allprojects.webp",
    linkGit: "https://github.com/Paul1226/Proyectos-ConquerBlocks",
    linkPage: "https://proyectos-conquerblocks-pauldev.netlify.app/",
    summary:
      "Página centralizada con todos los proyectos de mi formación en ConquerBlocks, incluyendo enlaces y descripciones.",
  },
  {
    name: "Course Store",
    description:
      "Una aplicación que simula el proceso de compra en línea, permitiendo agregar productos al carrito, calcular subtotales y totales. Ideal para practicar lógica de negocio y manejo de datos dinámicos.",
    technologies: ["Astro", "JavaScript"],
    image: "/images/project-shopping.webp",
    linkGit: "https://github.com/Paul1226/Shopping-Car",
    linkPage: "https://shoppingpd.netlify.app/",
    summary:
      "Aplicación de compra en línea que simula carrito, cálculos de subtotales y totales, ideal para practicar lógica y datos dinámicos.",
  },
];
