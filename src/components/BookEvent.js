const eventTypes = [
  'Birthday Party', 'Wedding', 'Haldi', 'Sangeet', 'Mehndi',
  'Engagement', 'Puja / Religious Event', 'Bhajan / Kirtan', 'Birha',
  'Family Function', 'Other',
];

const inputStyle = 'mt-2 w-full rounded-lg border border-slate-600 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30';

function BookEvent() {
  const today = new Date();
  const minimumDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Hello Anshu, I would like to enquire about booking Amit Sound System.',
      '',
      `Name: ${data.get('name').trim()}`,
      `Phone: ${data.get('phone').trim()}`,
      `Event: ${data.get('eventType')}`,
      `Date: ${data.get('date')}`,
      `Venue / Location: ${data.get('venue').trim()}`,
      `Requirements: ${data.get('requirements').trim() || 'Please help me choose a setup.'}`,
    ].join('\n');
    window.open(`https://wa.me/918953203230?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-white sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <a href="#home" className="text-sm font-medium text-slate-300 hover:text-amber-400">← Back to Home</a>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">Let’s plan your celebration</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">Book an <span className="text-amber-400">Event</span></h1>
            <p lang="hi" className="mt-5 text-xl font-semibold leading-relaxed text-slate-200">हर खुशी, हर उत्सव के लिए — अमित साउंड सिस्टम आपके साथ!</p>
            <p className="mt-4 leading-relaxed text-slate-400">Share your event details with Anshu to discuss availability, sound equipment, and your setup.</p>
            <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
              <h2 className="text-lg font-bold">Anshu <span lang="hi">(अंशु)</span></h2>
              <p className="mt-2 text-sm text-slate-400">Prefer to talk? Call us directly.</p>
              <a href="tel:+918953203230" className="mt-4 block w-fit rounded text-lg font-semibold text-amber-400 hover:text-amber-300">8953203230</a>
              <a href="tel:+918127983630" className="mt-2 block w-fit rounded text-lg font-semibold text-amber-400 hover:text-amber-300">8127983630</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Your event details</h2>
            <p className="mt-2 text-sm text-slate-400">All fields are required except additional requirements.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium">Your name
                <input name="name" autoComplete="name" required maxLength={100} pattern=".*\S.*" placeholder="Enter your name" className={inputStyle} />
              </label>
              <label className="text-sm font-medium">Phone number
                <input name="phone" type="tel" autoComplete="tel-national" inputMode="numeric" required pattern="[6-9][0-9]{9}" maxLength={10} title="Enter a 10-digit Indian mobile number starting with 6, 7, 8, or 9" placeholder="10-digit mobile number" className={inputStyle} />
              </label>
              <label className="text-sm font-medium">Event type
                <select name="eventType" required defaultValue="" className={inputStyle}>
                  <option value="" disabled>Select an event</option>
                  {eventTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </label>
              <label className="text-sm font-medium">Event date
                <input name="date" type="date" required min={minimumDate} className={`${inputStyle} [color-scheme:dark]`} />
              </label>
              <label className="text-sm font-medium sm:col-span-2">Venue / Location
                <input name="venue" autoComplete="street-address" required maxLength={250} pattern=".*\S.*" placeholder="Venue name, village / city" className={inputStyle} />
              </label>
              <label className="text-sm font-medium sm:col-span-2">Additional requirements <span className="text-slate-400">(optional)</span>
                <textarea name="requirements" rows={4} maxLength={1500} placeholder="Tell us about your sound, DJ, or lighting requirements…" className={`${inputStyle} resize-y`} />
              </label>
            </div>
            <button type="submit" className="mt-6 w-full rounded-lg bg-amber-400 px-5 py-4 font-bold text-slate-950 transition-colors hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400">Continue on WhatsApp ↗</button>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">Opens WhatsApp with your enquiry ready to send. Anshu will confirm availability and pricing before your booking is confirmed.</p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default BookEvent;
