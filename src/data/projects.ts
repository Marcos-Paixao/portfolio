import type { Project } from "../types/Project";

import androidImage from "../assets/projects/Android.png";
import formularioImage from "../assets/projects/Formulario.png";
import cordelImage from "../assets/projects/Cordel.png";
import achoulevouImage from "../assets/projects/AchouLevou.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "História do Android",
    description:
      "Projeto desenvolvido para apresentar a história e a evolução do sistema operacional Android.",
    technologies: ["HTML", "CSS"],
    githubUrl:
      "https://github.com/Marcos-Paixao/historia-do-android",
    image: androidImage,
    demoUrl: "https://marcos-paixao.github.io/historia-do-android/",
  },

  {
    id: 2,
    title: "Formulário de Cadastro",
    description:
      "Formulário de cadastro desenvolvido com foco em estrutura HTML, organização dos campos e estilização responsiva.",
    technologies: ["HTML", "CSS"],
    githubUrl:
      "https://github.com/Marcos-Paixao/Projeto-Formulario-de-cadastro",
    image: formularioImage,
    demoUrl: "https://marcos-paixao.github.io/Projeto-Formulario-de-cadastro/",
  },

  {
    id: 3,
    title: "Cordel Moderno",
    description:
      "Projeto web inspirado na literatura de cordel, utilizando recursos de HTML e CSS para criar uma apresentação visual.",
    technologies: ["HTML", "CSS"],
    githubUrl:
      "https://github.com/Marcos-Paixao/Projeto-Cordel-Moderno",
    image: cordelImage,
    demoUrl: "https://marcos-paixao.github.io/Projeto-Cordel-Moderno/",
  },

  {
    id: 4,
    title: "AchouLevou",
    description:
      "Catálogo de produtos desenvolvido para praticar React, TypeScript, componentes, Props, responsividade e organização de código.",
    technologies: ["React", "TypeScript", "CSS"],
    githubUrl:
      "https://github.com/Marcos-Paixao/achoulevou",
    image: achoulevouImage,
  },
];