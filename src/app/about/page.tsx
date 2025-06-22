import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="bg-background text-foreground">
      {/* Section Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            À propos de la technologie
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explorer l&apos;univers de la technologie, c&apos;est comprendre le
            monde d&apos;aujourd&apos;hui et bâtir celui de demain.
          </p>
        </div>
      </section>

      {/* Section Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Une vision tournée vers l&apos;innovation
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              La technologie n&apos;est pas seulement une question de machines ou
              de code. C&apos;est un levier puissant pour améliorer la vie
              humaine, connecter les esprits, et repousser les limites du
              possible.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Chez <strong>NanaCode</strong>, nous croyons que l&apos;innovation doit
              être accessible à tous. Nous nous engageons à partager du contenu
              de qualité, à inspirer les créateurs de demain et à rendre les
              connaissances techniques claires et motivantes.
            </p>
          </div>
          <div>
            <Image
              src="/images/tech-vision.jpg"
              alt="Innovation et technologie"
              width={700} // définir une largeur
              height={400} // définir une hauteur
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Nos Valeurs</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Des principes qui guident notre mission dans l&apos;univers
              digital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Accessibilité</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rendre les technologies compréhensibles, accessibles et utiles à
                tous.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Viser la qualité, l&apos;exactitude et la pertinence dans tout ce
                que nous partageons.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Inspiration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Inspirer la curiosité, la créativité et la passion pour la
                technologie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Conclusion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            L&apos;avenir se construit aujourd&apos;hui
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Rejoins-nous dans cette aventure où chaque ligne de code, chaque
            idée, chaque partage construit un monde meilleur. La technologie
            n&apos;attend que toi.
          </p>
          <Link href="/articles">
            <Button className="rounded-full px-8 py-6 text-lg">
              Découvrir nos articles
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;
