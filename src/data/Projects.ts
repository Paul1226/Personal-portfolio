export type Project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  linkGit: string;
  linkPage: string;
};

export const projects: Project[] = [
  {
    name: "Página de Películas",
    description:
      "Un sitio web interactivo donde los usuarios pueden buscar información sobre películas, ver detalles como la sinopsis, el elenco y las calificaciones. Integra una API para datos dinámicos y permite explorar contenido actualizado.",
    technologies: ["Astro", "TypeScript", "Css", "API REST"],
    image: "/images/project-movies.webp",
    linkGit: "https://github.com/Paul1226/MoviesTMDB",
    linkPage: "https://mymovies023.netlify.app/",
  },
  {
    name: "Template Portfolio",
    description:
      "Un diseño moderno y responsivo para un portafolio personal, creado como base para personalizar y mostrar proyectos. Destaca por su enfoque en el diseño limpio y una estructura fácil de modificar.",
    technologies: ["Tailwind", "Astro"],
    image: "/images/project-template.webp",
    linkGit: "https://github.com/Paul1226/Template-Porfolio",
    linkPage: "https://template-porfolio.netlify.app/",
  },
  {
    name: "Proyectos de ConquerBlocks",
    description:
      "Una página centralizada donde se recopilan todos los proyectos desarrollados durante mi formación en la academia ConquerBlocks, con enlaces directos y descripciones de cada uno.",
    technologies: ["Astro", "Tailwind", "TypeScript"],
    image: "/images/project-allprojects.webp",
    linkGit: "https://github.com/Paul1226/Proyectos-ConquerBlocks",
    linkPage: "https://proyectos-conquerblocks-pauldev.netlify.app/",
  },
  {
    name: "Simulador de Compras",
    description:
      "Una aplicación que simula el proceso de compra en línea, permitiendo agregar productos al carrito, calcular subtotales y totales. Ideal para practicar lógica de negocio y manejo de datos dinámicos.",
    technologies: ["Astro", "JavaScript"],
    image: "/images/project-shopping.webp",
    linkGit: "https://github.com/Paul1226/Shopping-Car",
    linkPage: "https://shoppingpd.netlify.app/",
  },
];
