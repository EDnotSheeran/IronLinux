import { hashPassword } from '../src/libs/auth';
import { PrismaClient } from 'prisma/prisma-client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'admin',
      email: 'admin@admin',
      ...hashPassword('admin'),
      role: 'Admin',
    },
  });

  await prisma.application.create({
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
