const { hashPassword } = require('../src/libs/auth');
const { PrismaClient } = require('prisma/prisma-client');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'admin',
      email: 'admin',
      ...hashPassword('admin'),
      role: 'Admin',
    },
  });

  await prisma.applicationProps.create({
    data: {
      logo: '/img/iron-logo.svg',
      SocialMedia: {
        createMany: {
          data: [
            {
              href: 'https://www.facebook.com/ironlinuxoficial',
              platform: 'Facebook',
            },
            {
              href: 'https://www.instagram.com/ironlinux_/',
              platform: 'Instagram',
            },
            {
              href: 'https://www.linkedin.com/company/ironlinux/',
              platform: 'Linkedin',
            },
          ],
        },
      },
    },
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
