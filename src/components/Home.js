import djPhoto from '../image/DJ.jpeg';

function Home() {
  return (
    <section id="home" aria-label="Welcome to Amit Sound System" className="overflow-hidden bg-slate-950 text-white">
      <div className="grid min-h-[480px] items-center lg:grid-cols-2">
        <div className="p-4 sm:p-8 lg:py-12 lg:pl-8 lg:pr-0">
          <img
            src={djPhoto}
            alt="Amit Sound System DJ speakers and event sound equipment"
            width="1280"
            height="593"
            fetchPriority="high"
            className="h-auto w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
          />
        </div>
        <div className="px-6 pb-12 pt-4 sm:px-10 lg:px-12 lg:py-16">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">Amit Sound System</p>
          <h1 lang="hi" className="space-y-5 text-2xl font-bold leading-relaxed sm:text-3xl sm:leading-relaxed xl:text-4xl xl:leading-relaxed">
            <span className="block">हर जश्न की शान, हर खुशी के साथ,</span>
            <span className="block text-slate-200">जन्मदिन हो, शादी हो या पूजा-पाठ,</span>
            <span className="block text-amber-400">हर पल को बनाए यादगार — अमित साउंड सिस्टम के साथ! ✨</span>
          </h1>
          <div aria-hidden="true" className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-amber-400 to-cyan-400" />
        </div>
      </div>
    </section>
  );
}

export default Home;
