export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-cyan-100 max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}
