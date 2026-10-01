import contactCard from '../image/card.jpeg';

const occasions = [
  'बर्थडे पार्टी',
  'शादी समारोह',
  'हल्दी समारोह',
  'संगीत समारोह',
  'मेहंदी समारोह',
  'सगाई / रिंग सेरेमनी',
  'पूजा-पाठ एवं धार्मिक कार्यक्रम',
  'शिव चर्चा / भजन-कीर्तन',
  'बिरहा कार्यक्रम',
  'फैमिली फंक्शन एवं अन्य सभी शुभ कार्यक्रम',
];

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-white/10 bg-slate-950 px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 id="contact-heading" className="text-3xl font-bold sm:text-4xl">Contact <span className="text-amber-400">Us</span></h2>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <img
              src={contactCard}
              alt="Amit Sound System contact card"
              loading="lazy"
              className="h-auto w-full rounded-2xl border border-white/10 shadow-2xl"
            />
            <div className="mt-5 rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
              <p className="text-lg font-bold text-white"><span lang="en">Anshu</span> (अंशु)</p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-base font-semibold text-amber-400">
                <a href="tel:+918953203230" className="rounded hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400">8953203230</a>
                <span className="text-slate-400">/</span>
                <a href="tel:+918127983630" className="rounded hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400">8127983630</a>
              </div>
              <h3 className="mt-5 border-t border-white/10 pt-4 text-sm font-semibold text-slate-300">Follow us</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href="https://www.youtube.com/@anshu_prayagi_0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm font-semibold text-red-300 transition-colors hover:bg-red-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-400">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden="true" focusable="false">
                    <rect x="1" y="4" width="22" height="16" rx="5" fill="#ff0033" />
                    <path d="m10 8 6 4-6 4Z" fill="white" />
                  </svg>
                  <span>YouTube <span className="block text-xs font-normal">@anshu_prayagi_0</span></span>
                </a>
                <a href="https://www.instagram.com/amitsoundsystem?stkn=MXY5ODAwdGM4dGR1eQ==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-pink-400/30 bg-pink-400/10 px-4 py-3 text-sm font-semibold text-pink-300 transition-colors hover:bg-pink-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-400">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden="true" focusable="false">
                    <defs>
                      <linearGradient id="contact-instagram-gradient" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="#ffdc80" />
                        <stop offset="45%" stopColor="#f56040" />
                        <stop offset="70%" stopColor="#c13584" />
                        <stop offset="100%" stopColor="#833ab4" />
                      </linearGradient>
                    </defs>
                    <rect width="24" height="24" rx="6" fill="url(#contact-instagram-gradient)" />
                    <rect x="4.5" y="4.5" width="15" height="15" rx="4.5" fill="none" stroke="white" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="3.5" fill="none" stroke="white" strokeWidth="1.8" />
                    <circle cx="17" cy="7" r="1" fill="white" />
                  </svg>
                  <span>Instagram <span className="block text-xs font-normal">@amitsoundsystem</span></span>
                </a>
                <a href="https://www.facebook.com/share/v/17dx9z1xQr/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-blue-400/30 bg-blue-400/10 px-4 py-3 text-sm font-semibold text-blue-300 transition-colors hover:bg-blue-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden="true" focusable="false">
                    <circle cx="12" cy="12" r="12" fill="#1877f2" />
                    <path d="M13.5 24v-9h3l.5-3.5h-3.5V9c0-1 .4-1.7 1.8-1.7H17V4.2c-.7-.1-1.7-.2-2.7-.2-2.7 0-4.3 1.6-4.3 4.5v3H7V15h3v9Z" fill="white" />
                  </svg>
                  <span>Facebook <span className="block text-xs font-normal">Watch our video</span></span>
                </a>
              </div>
            </div>
          </div>
          <div lang="hi" className="rounded-2xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <h3 className="text-3xl font-bold leading-relaxed text-amber-400">अमित साउंड सिस्टम</h3>
            <p className="mt-3 text-lg font-bold leading-relaxed text-slate-100">हर खुशी, हर उत्सव और हर शुभ अवसर के लिए बुकिंग उपलब्ध है। ✨</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {occasions.map((occasion) => (
                <li key={occasion} className="flex items-start gap-2 text-base font-bold leading-relaxed text-slate-200">
                  <span aria-hidden="true" className="text-amber-400">✓</span>
                  <span>{occasion}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-white/10 pt-6 text-lg font-bold leading-relaxed">✨ आपका अवसर कोई भी हो, माहौल शानदार बनाने के लिए अमित साउंड सिस्टम आपके साथ है।</p>
            <p className="mt-5 text-lg font-bold leading-relaxed text-amber-400">“हर उत्सव की शान, हर खुशी के साथ — अमित साउंड सिस्टम!”</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
