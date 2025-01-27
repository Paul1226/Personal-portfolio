export type Experience = {
  date: string;
  position: string;
  companyName: string;
  companyUbi: string;
  description: string;
  summary: string;
};

export const experiences: Experience[] = [
  {
    date: "Enero 2022 - Presente",
    position: "Desarrollador Front-End",
    companyName: "Tech Solutions",
    companyUbi: "Cuenca, Ecuador",
    description:
      "Desarrollo de interfaces de usuario usando React y Tailwind CSS. Trabajé en la mejora de la accesibilidad y la optimización de la performance en aplicaciones web.",
    summary:
      "Desarrollé interfaces, mejorando accesibilidad y optimizando rendimiento en aplicaciones web.",
  },
  {
    date: "Jul 2020 - Dic 2021",
    position: "Desarrollador Web Junior",
    companyName: "WebDev Studios",
    companyUbi: "Cuenca, Ecuador",
    description:
      "Desarrollo de sitios web estáticos y dinámicos usando HTML, CSS, JavaScript. Participé en la implementación de funcionalidades interactivas para clientes de diversos sectores.",
    summary:
      "Desarrollé sitios web, implementando funcionalidades interactivas para diversos clientes.",
  },
  {
    date: "Feb 2019 - Jun 2020",
    position: "Practicante de Programación",
    companyName: "Innovative Tech",
    companyUbi: "Cuenca, Ecuador",
    description:
      "Realicé prácticas en el departamento de desarrollo de software, ayudando en la creación de pequeños proyectos internos y optimización de procesos mediante la automatización.",
    summary:
      "Prácticas en desarrollo de software, colaborando en proyectos internos y optimizando procesos con automatización.",
  },
];
