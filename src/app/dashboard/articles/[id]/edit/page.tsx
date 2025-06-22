import EditArticlesPage from "@/components/articles/edit-articles-page"
import { prisma } from "@/lib/prisma";

type EditArticlesPageProps = {
  params: Promise<{ id: string }>
}
const page: React.FC<EditArticlesPageProps> = async ({ params }) => {
  const id = (await params).id;
  const article = await prisma.articles.findUnique({
    where: { id }
  })
  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div>
      <EditArticlesPage article={article} />
    </div>
  )
}

export default page