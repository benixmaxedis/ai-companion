import prismadb from '@/lib/prismadb';
import { auth, redirectToSignIn } from '@clerk/nextjs';

import CompanionForm from './components/companion-form';

interface CompanionIdPageProps {
  params: { companionId: string };
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  const { userId } = auth();
  console.log('userId:', userId);
  // TODO: Check subscription
  if (!userId) {
    redirectToSignIn();
    return null;
  }
  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
      userId,
    },
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;
