import servicePhoto from '../image/1.jpeg';
import djPhoto from '../image/DJ.jpeg';
import soundVideo from '../image/sound.mp4';
import djVideo from '../image/video dj.mp4';

function Service() {
  return (
    <section id="services" aria-labelledby="services-heading" className="border-t border-white/10 bg-slate-950 px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">Sound for every celebration</p>
        <h2 id="services-heading" className="text-3xl font-bold sm:text-4xl">Our <span className="text-amber-400">Services</span></h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <img src={servicePhoto} alt="Amit Sound System event setup" loading="lazy" className="h-80 w-full bg-black object-contain" />
            <h3 className="p-5 text-lg font-semibold">Event Setup</h3>
          </article>
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <img src={djPhoto} alt="Amit Sound System speakers and DJ equipment" loading="lazy" className="h-80 w-full bg-black object-contain" />
            <h3 className="p-5 text-lg font-semibold">DJ &amp; Sound Equipment</h3>
          </article>
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <video controls playsInline preload="metadata" aria-label="Sound system demonstration" className="h-80 w-full bg-black object-contain">
              <source src={soundVideo} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <h3 className="p-5 text-lg font-semibold">Sound System</h3>
          </article>
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <video controls playsInline preload="metadata" aria-label="DJ performance video" className="h-80 w-full bg-black object-contain">
              <source src={djVideo} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <h3 className="p-5 text-lg font-semibold">DJ Performance</h3>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Service;
