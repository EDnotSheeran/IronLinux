import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

async function main() {
  await prisma.infoHomePage.create({
    data: {
      imageURL: "",
      title: "Quer aprender mais sobre o mundo de Linux e Segurança ?",
      description:
        "IronLinux presta serviços de treinamento e consultoria nas principais áreas de segurança e sistemas operacionais. Descubra mais entrando em contato conosco.",
      titleHomePageSpecialties: "Uma ampla diversidades de aprendizados",
      titleHomePageCourses: "Cursos Disponíveis",
      titleHomePageExperts: "Precisa de um especialista?",
      titleHomePagePosts: "Últimos posts do blog:",
      descriptionHomePageExperts:
        "Você precisa de alguma ajuda com:Linux, Segurança, Servidores ou Roteadores?",
      titleContactUS: "Fale Conosco",
    },
  });

  await prisma.aboutCourses.create({
    data: {
      titleFirst: "Conheça as variedades da IronLinux",
      title1: "Uma ampla seleção de cursos",
      description1:
        "Somos especialistas em implementar soluções com software open source e depois mostrar para o cliente como realizar a utilização das mesas..",
      title2: "Aprenda Sem Limites",
      description2:
        "Desenvolva habilidades com cursos, certificados e graduações on-line.",
      title3: "Prepare-se para uma carreira",
      description3:
        "Em áreas de alta demanda, como TI, IA e engenharia de nuvem, exige conhecimentos em Segurança de Informação",
      title4: "Tenha um histórico reconhecido pelo setor",
      description4:
        "Demonstre suas novas habilidades compartilhando o certificado do curso, certificado profissional e afins...",
      imageURL: "teste.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  await prisma.aboutConsulting.create({
    data: {
      titleFirst: "Não deixe para amanhã, o que se pode ter hoje.",
      title: "Certificação Expert",
      description:
        "Nossa plataforma de cursos possuem funções que auxiliam o aluno no processo de ensino e aprendizagem, possibilitando o emprego prático dos conhecimentos adquiridos!",
      checkedDescription1: "Alto Nivel de Conhecimento e Aprendizado",
      checkedDescription2:
        "Você apredenderá os niveis mais baixos das regras padrões de segurança da informação",
      checkedDescription3:
        "Qualidade e experiência em treinamentos imersivos e práticos.",
      imageURL: "tete.png",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
