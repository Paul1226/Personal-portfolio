export type Education = {
  date: string;
  degree: string;
  institution: string;
  institutionUbi: string;
  description: string;
};

export const education: Education[] = [
  {
    date: "2023 - 2024",
    degree: "Desarrollo Front-End",
    institution: "Academia ConquerBlocks",
    institutionUbi: "En línea",
    description:
      "Estudios enfocados en la creación de interfaces de usuario usando HTML, CSS, JavaScript y frameworks como React y Tailwind CSS. Desarrollo de aplicaciones web interactivas y optimización de la experiencia del usuario.",
  },
  {
    date: "2023 - 2024",
    degree: "Desarrollo Back-End",
    institution: "Academia ConquerBlocks",
    institutionUbi: "En línea",
    description:
      "Formación en desarrollo de aplicaciones en el servidor utilizando Node.js, Express y bases de datos SQL/NoSQL. Implementación de API RESTful, autenticación de usuarios y gestión de datos en aplicaciones escalables.",
  },
];
