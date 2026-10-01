import weddingVideo from '../image/wedding_first_30_seconds.mp4';
import birhaVideo from '../image/birha.mp4';
import geetVideo from '../image/geet.mp4';
import haldiVideo from '../image/haldi1.mp4';
import geet2Video from '../image/geet2.mp4';

function limitGeet2Playback(event) {
  const video = event.currentTarget;
  if (video.currentTime >= 20) {
    video.pause();
    if (video.currentTime > 20) video.currentTime = 20;
  }
}

function replayGeet2(event) {
  const video = event.currentTarget;
  if (video.currentTime >= 20) video.currentTime = 0;
}

function Event() {
  return (
    <section id="events" aria-labelledby="events-heading" className="border-t border-white/10 bg-slate-950 px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">Celebrations in action</p>
        <h2 id="events-heading" className="text-3xl font-bold sm:text-4xl">Our <span className="text-amber-400">Events</span></h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <video controls playsInline preload="metadata" aria-label="Wedding event video" className="h-80 w-full bg-black object-contain">
              <source src={weddingVideo} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Wedding Celebration</h3>
              <p className="mt-1 text-sm text-slate-400">30-second highlight</p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <video controls playsInline preload="metadata" aria-label="Birha performance video" className="h-80 w-full bg-black object-contain">
              <source src={birhaVideo} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Birha</h3>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <video controls playsInline preload="metadata" aria-label="Geet performance video" className="h-80 w-full bg-black object-contain">
              <source src={geetVideo} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Geet</h3>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <video controls playsInline preload="metadata" aria-label="Haldi celebration video" className="h-80 w-full bg-black object-contain">
              <source src={haldiVideo} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Haldi</h3>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
            <video controls playsInline preload="metadata" aria-label="Geet 2 performance — first 20 seconds" onTimeUpdate={limitGeet2Playback} onSeeking={limitGeet2Playback} onPlay={replayGeet2} className="h-80 w-full bg-black object-contain">
              <source src={`${geet2Video}#t=0,20`} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <div className="p-5">
              <h3 className="text-lg font-semibold">Geet</h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Event;
