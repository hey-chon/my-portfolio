import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ExternalLink,
  Facebook,
  Github,
  Infinity,
  Instagram,
  LockKeyhole,
  Mail,
  Menu,
  Send,
  X,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const projects = [
  {
    no: "01",
    title: "Personal Portfolio",
    meta: "chon.is-a.dev / 2024",
    description:
      "A personal space to showcase my projects, skills, journey and my story. Feel free to explore and interact with my personal website portfolio.",
    kind: "portfolio",
    href: "https://chondev.netlify.app",
    label: "Inspect",
    className: "project-a",
  },
  {
    no: "02",
    title: "WB.prjc",
    meta: "Web project / In progress",
    description:
      "A training ground that focused on the interface, this is just built for fun and for improvements. Feel free to explore this experiment website I just built with spck editor.",
    kind: "wb",
    href: "https://wb-prjc.vercel.app/",
    label: "Inspect",
    className: "project-b",
  },
  {
    no: "03",
    title: "Finding Anomaly",
    meta: "Web game / CSSNCII 2026",
    description:
      "A web game built for our class presentation in CSSNCII by UniGames. Features an immersive anomaly-hunting challenge with custom loading and interactive mechanics.",
    kind: "anomaly",
    screenshot: "project-finding-anomaly.png",
    href: "https://finding-anomaly.vercel.app/",
    label: "Inspect",
    className: "project-c",
  },
  {
    no: "04",
    title: "Jera & Jimson Anniversary",
    meta: "Personal project / 2024",
    description:
      "A website built for me and my girlfriend’s 2nd year anniversary, this website hold’s our relationship story. I used ai tools to integrate those complex logic and this website contains many features.",
    kind: "anniversary",
    screenshot: "project-jera-jimson-anniversary.png",
    private: true,
    className: "project-d",
  },
  {
    no: "05",
    title: "Hapib Surprise",
    meta: "Commission / In progress",
    description:
      "A commission website for my client’s girlfriend and got paid for making this piece, ai helped me to integrate this website for easier and smoother workflow.",
    kind: "commission",
    screenshot: "project-hapib-surprise.png",
    private: true,
    className: "project-e",
  },
  {
    no: "06",
    title: "For My Bebi — 27 Months",
    meta: "Personal project / 2026",
    description:
      "A special surprise keepsake website built for our 27th month milestone, featuring interactive quiz mechanics, personalized notes, and animated surprise reveals.",
    kind: "bebi-27-months",
    screenshot: "project-bebi-27-months.png",
    private: true,
    className: "project-f",
  },
  {
    no: "07",
    title: "26th Monthsary",
    meta: "Personal project / 2026",
    description:
      "A celebratory web page crafted for 2 years & 2 months with personalized aesthetic styling, heartfelt messages, and clean interactive elements.",
    kind: "monthsary-26th",
    screenshot: "project-26th-monthsary.png",
    private: true,
    className: "project-g",
  },
  {
    no: "08",
    title: "25th Monthsary Letter",
    meta: "Personal project / 2026",
    description:
      "An interactive digital love letter website celebrating 2 years and 1 month together, with responsive pastel visuals and memorable reflections.",
    kind: "monthsary-25th",
    screenshot: "project-25th-monthsary.png",
    private: true,
    className: "project-h",
  },
  {
    no: "09",
    title: "Our Savings Tracker",
    meta: "Web application / 2026",
    description:
      "A cute, gamified shared savings tracker web application designed for joint savings goals, deposit logs, and collaborative milestones.",
    kind: "savings-tracker",
    screenshot: "project-savings-tracker.png",
    private: true,
    className: "project-i",
  },
];

const certificates = [
  {
    title: "Academic awards",
    issuer: "Academic archive",
    category: "Certificates / collected work",
    date: "Previous archive",
    image: "jimson-certificates-collage.jpeg",
    alt: "Jimson Ilog's academic certificates and awards collage",
  },
  {
    title: "Student leadership training",
    issuer: "Leadership training",
    category: "Certificate / leadership",
    date: "2026",
    image: "jimson-leadership-certificate.jpeg",
    alt: "Jimson Ilog's student leadership training certificate",
  },
  {
    title: "Web Development Internship Program",
    issuer: "Springer Capital",
    category: "Internship / course recognition",
    date: "May 2026",
    image: "certificate-springer-capital.jpeg",
    alt: "Certificate of completion for Jimson Ilog's Web Development Internship Program at Springer Capital",
  },
  {
    title: "Introduction to HTML",
    issuer: "CodeSignal",
    category: "Front-end fundamentals",
    date: "May 26, 2026",
    image: "certificate-codesignal-html.jpeg",
    alt: "CodeSignal certificate for Jimson Ilog's Introduction to HTML course",
  },
  {
    title: "HTML Essentials",
    issuer: "Cisco Networking Academy × JS Institute",
    category: "Statement of achievement",
    date: "August 8, 2026",
    image: "certificate-cisco-html-essentials.jpeg",
    alt: "Cisco Networking Academy and JS Institute Statement of Achievement for HTML Essentials",
  },
  {
    title: "CSS Essentials",
    issuer: "Cisco Networking Academy × JS Institute",
    category: "Statement of achievement",
    date: "August 14, 2026",
    image: "certificate-cisco-css-essentials.jpeg",
    alt: "Cisco Networking Academy and JS Institute Statement of Achievement for CSS Essentials",
  },
  {
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    category: "Foundations for understanding AI",
    date: "August 8, 2026",
    image: "certificate-ibm-ai-fundamentals.jpeg",
    alt: "IBM SkillsBuild certificate for AI Fundamentals: Foundations for Understanding AI",
  },
  {
    title: "Craft Precise Prompts for AI Models",
    issuer: "IBM SkillsBuild",
    category: "AI communication and prompting",
    date: "August 14, 2026",
    image: "certificate-ibm-precise-prompts.jpeg",
    alt: "IBM SkillsBuild certificate for Craft Precise Prompts for AI Models",
  },
  {
    title: "Azure AI Fundamentals",
    issuer: "TESDA Online Program",
    category: "Microsoft Artificial Intelligence Course",
    date: "August 28, 2026",
    image: "certificate-tesda-azure-ai.jpeg",
    alt: "TESDA Online Program certificate of completion for Microsoft Artificial Intelligence Course: Azure AI Fundamentals",
  },
];

const badges = [
  {
    title: "HTML Essentials",
    issuer: "Cisco Networking Academy",
    image: "badge-cisco-html-essentials.png",
    alt: "Cisco Networking Academy verified HTML Essentials badge",
  },
  {
    title: "CSS Essentials",
    issuer: "Cisco Networking Academy",
    image: "badge-cisco-css-essentials.png",
    alt: "Cisco Networking Academy verified CSS Essentials badge",
  },
  {
    title: "AI Fundamentals",
    issuer: "IBM SkillsBuild",
    image: "badge-ibm-ai-fundamentals.png",
    alt: "IBM SkillsBuild AI Fundamentals badge",
  },
  {
    title: "Precise Prompts",
    issuer: "IBM SkillsBuild",
    image: "badge-ibm-precise-prompts.png",
    alt: "IBM SkillsBuild Craft Precise Prompts for AI Models badge",
  },
];

const assetPath = (name: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (typeof window !== "undefined") {
    const previewIndex = window.location.pathname.indexOf("/preview/");
    if (previewIndex >= 0) {
      return `${window.location.pathname.slice(0, previewIndex)}/images/${name}`;
    }
  }
  return `${base}/images/${name}`;
};

const timeline = [
  {
    year: "2023",
    title: "2023",
    content:
      "I’m too obsessed about the world of technology, I like to play games such as mobile legends, call of duty, and etc. then this is where my curiosity started.",
  },
  {
    year: "2024",
    title: "2024",
    content:
      "I started being curious on how these games, websites, and etc. function? and this curiosity gaves me the reason to start learning about development. I tried python the “turtle python” haha but when I got the chance to do python via codesandbox, I made my first main.py and it motivates me more cuz I succeed.",
  },
  {
    year: "2025",
    title: "2025",
    content:
      "I started learning website fundamentals. I started with html then got curious about designs and functionalities like animations, logics, and how things move inside the website. I learned css and javascript basics, it made myself better.",
  },
  {
    year: "2026",
    title: "2026",
    content:
      "Along the way, I enroll on free online courses to have some improvements. I also use youtube as youtube academy because everything that I don’t know, youtube simply answers my “I don’t knows”. And also the Ai, I use ai tools for a better workflows and it gives much easier workflow than before. In this year, I’ve created over 13+ projects for client and my personal project that still grows and continue. And I’m very thankful cuz I have a very supportive girlfriend who always support my projects and what I’ve learned even though she doesn’t really understand it because of the complexity. Now I’m expanding my tech-stack and learning other programming languages and focusing on frontend and basic backend development.",
  },
];

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`jp-reveal ${className}`}>{children}</div>;
}

function StarField() {
  const stars = Array.from({ length: 72 }, (_, index) => ({
    left: `${(index * 37) % 100}%`,
    top: `${(index * 61) % 100}%`,
    delay: `${(index % 9) * 0.45}s`,
    size: index % 11 === 0 ? 2 : 1,
  }));
  return (
    <div className="jp-stars" aria-hidden="true">
      {stars.map((star, index) => (
        <span
          key={index}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}

function ProfilePortrait({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "jp-profile-compact" : "jp-profile-portrait"}>
      {compact ? (
        <>
          <div className="jp-profile-grid" />
          <div className="jp-profile-monogram">JI</div>
          <span className="jp-profile-stamp">JIMSON / 01</span>
        </>
      ) : (
        <div className="jp-profile-card">
          <span className="jp-profile-brand">chon.dev</span>
          <div className="jp-profile-photo">
            <img src={assetPath("jimson-profile.jpeg")} alt="Jimson Ilog" />
          </div>
          <span className="jp-profile-name">JIMSON<br />ILOG</span>
        </div>
      )}
    </div>
  );
}

function ProjectVisual({
  kind,
  compact = false,
}: {
  kind: string;
  compact?: boolean;
}) {
  const project = projects.find((item) => item.kind === kind);
  const label = project?.title ?? "Web experiment";
  if (project?.screenshot) {
    return (
      <div className={`jp-project-visual-art jp-art-${kind} has-screenshot ${compact ? "is-compact" : ""}`}>
        <img className="jp-project-screenshot" src={assetPath(project.screenshot)} alt={`${label} desktop website preview`} loading="eager" decoding="sync" fetchPriority="high" />
      </div>
    );
  }
  return (
    <div className={`jp-project-visual-art jp-art-${kind} ${compact ? "is-compact" : ""}`}>
      {kind === "portfolio" && (
        <>
          <div className="jp-art-portfolio-mark">
            <strong>CHON</strong>
            <span>.IS-A.DEV</span>
          </div>
          <div className="jp-art-portfolio-frame" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <span className="jp-art-portfolio-dot" aria-hidden="true" />
        </>
      )}
      {kind === "wb" && (
        <>
          <div className="jp-art-wb-mark">
            <strong>WB</strong>
            <span>.prjc</span>
          </div>
          <div className="jp-art-portfolio-frame" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <span className="jp-art-portfolio-dot" aria-hidden="true" />
        </>
      )}
      {kind === "anniversary" && (
        <>
          <div className="jp-art-star">✳</div>
          <div className="jp-art-anniversary">JERA<br /><span>&amp;</span> JIMSON</div>
          <div className="jp-art-date">A DIGITAL KEEPSAKE / 2024</div>
        </>
      )}
      {kind === "commission" && (
        <>
          <div className="jp-art-commission-shape" />
          <div className="jp-art-commission-copy">A SURPRISE<br /><span>MADE WITH CODE</span></div>
          <div className="jp-art-spark">+</div>
        </>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="jp-section-label">
      <span />
      <span>{children}</span>
    </div>
  );
}

export function JimsonPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [openYear, setOpenYear] = useState<string | null>(null);
  const [showAdditional, setShowAdditional] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: pageProgress } = useScroll();
  const ambientY = useTransform(pageProgress, [0, 1], [0, 420]);
  const ambientRotate = useTransform(pageProgress, [0, 1], [0, 22]);
  const heroY = useTransform(scrollYProgress, [0, 0.72, 1], [0, -120, -280]);
  const heroScale = useTransform(scrollYProgress, [0, 0.72, 1], [1, 0.97, 0.86]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.68, 1], [1, 0.94, 0.08]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.82, 1], ["blur(0px)", "blur(0px)", "blur(7px)"]);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".jp-reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setSent(false);
    setFormError("");

    try {
      const encoded = new URLSearchParams(
        Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
      );
      const response = await fetch("https://formspree.io/f/meajqvor", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encoded,
      });

      if (!response.ok) {
        throw new Error("The message could not be sent right now.");
      }

      form.reset();
      setSent(true);
      window.setTimeout(() => setSent(false), 5000);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "The message could not be sent right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const jump = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="jp-page">
      <motion.div className="jp-scroll-progress" style={{ scaleX: pageProgress }} aria-hidden="true" />
      <motion.div className="jp-ambient-orbit" style={{ y: ambientY, rotate: ambientRotate }} aria-hidden="true">
        <span /><span /><span />
      </motion.div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600&display=swap');
        .jp-page{--ink:#f0eee7;--muted:#929292;--dim:#555;--line:rgba(235,235,225,.16);--cyan:#c8c8c8;--violet:#a8a8a8;--blue:#858585;position:relative;overflow:hidden;background:#090909;color:var(--ink);font-family:'Manrope',sans-serif;line-height:1.5}
        .jp-page *{box-sizing:border-box}.jp-page a{color:inherit;text-decoration:none}.jp-page button,.jp-page input,.jp-page textarea{font:inherit}.jp-page button{cursor:pointer}
        .jp-shell{position:relative;z-index:1;width:min(1240px,calc(100% - 48px));margin:auto}
        .jp-stars{position:absolute;inset:0;pointer-events:none;overflow:hidden;opacity:.72;background:linear-gradient(180deg,rgba(255,255,255,.015),transparent 34%,rgba(255,255,255,.018))}.jp-stars span{position:absolute;border-radius:50%;background:#dedede;opacity:.42;animation:jp-twinkle 5.5s ease-in-out infinite}.jp-stars span:nth-of-type(7n){background:#fff;opacity:.62}.jp-stars span:nth-of-type(11n){box-shadow:0 0 7px 1px rgba(255,255,255,.28)}
        .jp-noise{position:fixed;inset:0;z-index:10;pointer-events:none;opacity:.04;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E")}
         .jp-nav{height:82px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);position:sticky;top:0;z-index:12;background:linear-gradient(180deg,rgba(5,6,9,.94),rgba(5,6,9,.72) 76%,transparent);backdrop-filter:blur(14px)}.jp-logo{font-family:'Space Grotesk';letter-spacing:.12em;font-size:12px;font-weight:700}.jp-logo em{font-style:normal;color:var(--cyan);margin-left:5px}.jp-nav-form{display:flex;align-items:center;gap:9px;width:min(390px,42vw);border:1px solid var(--line);padding:5px 5px 5px 14px;border-radius:100px;background:rgba(255,255,255,.035)}.jp-nav-prompt{border:0;outline:0;color:#777a83;background:transparent;width:100%;font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.jp-send{display:flex;align-items:center;justify-content:center;border:0;background:#ecebe4;color:#11141a;border-radius:100px;width:56px;height:32px}.jp-send svg{width:14px;height:14px;transition:transform .25s ease}.jp-send:hover svg{transform:translate(2px,-2px)}.jp-menu-trigger{border:0;background:transparent;color:var(--ink);display:flex;align-items:center;gap:0;font-size:10px;letter-spacing:.15em;text-transform:uppercase}.jp-menu-trigger i{width:30px;height:30px;border:1px solid var(--line);border-radius:50%;display:grid;place-items:center;font-style:normal}
        .jp-menu-overlay{position:fixed;z-index:11;right:24px;top:70px;width:210px;padding:13px;border:1px solid rgba(220,220,220,.2);background:rgba(14,15,20,.94);backdrop-filter:blur(18px);box-shadow:0 25px 80px #0008;animation:jp-slide .3s ease both}.jp-menu-overlay button{display:block;width:100%;padding:13px 10px;text-align:left;border:0;border-bottom:1px solid var(--line);background:transparent;color:var(--ink);font-size:11px;letter-spacing:.08em}.jp-menu-overlay button:last-child{border:0}
        .jp-hero{min-height:900px;position:relative;display:grid;place-items:center;text-align:center;padding:120px 0 150px;isolation:isolate}.jp-hero-copy{position:relative;z-index:2;width:min(100%,620px);margin-inline:auto;display:flex;flex-direction:column;align-items:center;text-align:center}.jp-kicker{width:100%;font-family:'DM Mono';color:var(--cyan);font-size:10px;letter-spacing:.18em;text-transform:uppercase;text-align:center}.jp-title{width:100%;font-family:'Space Grotesk';font-size:clamp(58px,11vw,150px);font-weight:300;letter-spacing:-.085em;line-height:.83;margin:25px 0 31px;text-shadow:0 0 30px rgba(255,255,255,.06);text-align:center}.jp-title strong{font-weight:600;display:block;letter-spacing:-.1em}.jp-tagline{max-width:390px;margin:0 auto;color:#a6a6a6;font-size:13px;line-height:1.7;text-align:center}.jp-page button.jp-scroll{position:absolute;left:50%;bottom:55px;transform:translateX(-50%);width:max-content;max-width:calc(100% - 48px);display:flex;align-items:center;justify-content:center;gap:7px;color:var(--muted);font:400 8px/1 'DM Mono';letter-spacing:.12em;text-transform:uppercase;white-space:nowrap;text-align:center;opacity:.72}.jp-scroll svg{width:9px;height:9px;flex:none;animation:jp-bob 2s ease-in-out infinite}
         .jp-profile-compact,.jp-profile-portrait{position:relative;width:100%;height:100%;overflow:hidden;background:radial-gradient(circle at 55% 38%,#333 0,#1a1a1a 30%,#0b0b0b 66%);display:grid;place-items:center}.jp-profile-grid{position:absolute;inset:0;opacity:.24;background-image:linear-gradient(rgba(255,255,255,.28) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.28) 1px,transparent 1px);background-size:18px 18px;mask-image:linear-gradient(135deg,black,transparent 78%)}.jp-profile-monogram{font:600 43px 'Space Grotesk';letter-spacing:-.12em;color:#e9e9e9;text-shadow:0 0 18px rgba(255,255,255,.22);z-index:1}.jp-profile-stamp,.jp-profile-note{position:absolute;z-index:2;font:7px 'DM Mono';letter-spacing:.13em;color:#d6d6d6}.jp-profile-stamp{bottom:9px;left:10px}.jp-profile-note{top:10px;right:9px;writing-mode:vertical-rl}.jp-profile-portrait{height:550px;max-width:380px;transform:rotate(-3deg);border:1px solid rgba(230,230,220,.25);box-shadow:0 30px 80px rgba(0,0,0,.5)}.jp-profile-portrait img{width:100%;height:100%;object-fit:cover;filter:grayscale(1);display:block}.jp-profile-portrait .jp-profile-stamp{bottom:17px;left:17px}.jp-profile-portrait .jp-profile-note{top:17px;right:17px}.jp-profile-card{position:relative;width:82%;height:92%;padding:11px 11px 0;background:#e9e7df;color:#111;display:flex;flex-direction:column;box-shadow:0 18px 38px rgba(0,0,0,.35)}.jp-profile-brand{display:block;margin:0 1px 10px;font:600 8px 'DM Mono';letter-spacing:.12em;text-transform:lowercase}.jp-profile-photo{min-height:0;flex:1;overflow:hidden;background:#c9c8c2}.jp-profile-card .jp-profile-photo img{width:100%;height:100%;object-fit:cover;object-position:center 27%;display:block;filter:grayscale(1) contrast(1.12) brightness(.94)}.jp-profile-name{display:block;padding:9px 1px 10px;font:600 clamp(17px,2.2vw,27px)/.85 'Space Grotesk';letter-spacing:-.07em}.jp-about-image:after{display:none}
        .jp-tech-card,.jp-project-count,.jp-grade-card{height:100%;display:flex;flex-direction:column;justify-content:center;text-align:left;padding:14px 16px;font-family:'DM Mono'}.jp-tech-card span,.jp-grade-card span{font-size:7px;color:var(--cyan);letter-spacing:.12em}.jp-tech-card b{font:500 14px 'Space Grotesk';margin:7px 0 4px;letter-spacing:-.04em}.jp-tech-card i,.jp-grade-card i{font-style:normal;font-size:7px;color:var(--muted)}.jp-project-count{align-items:center;text-align:center}.jp-project-count b{font:400 38px 'Space Grotesk';line-height:.8}.jp-project-count b span{font-size:19px;color:var(--cyan)}.jp-project-count>span{font-size:7px;line-height:1.4;color:var(--muted);letter-spacing:.12em;margin-top:8px}.jp-grade-card{align-items:center;text-align:center}.jp-grade-card b{font:500 30px 'Space Grotesk';line-height:1;margin:5px 0}.jp-grade-card i{font-size:7px}
         .jp-project-visual-art{height:100%;position:relative;overflow:hidden;background:#151515;color:#e9e9e9;padding:19px;border:0}.jp-project-visual-art:after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(140deg,transparent 30%,rgba(3,3,3,.72));mix-blend-mode:multiply}.jp-project-visual-art.has-screenshot:after{display:none}.jp-project-screenshot{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;filter:none!important;opacity:1!important;transform:none!important;transition:opacity .4s}.jp-project:hover .jp-project-screenshot{transform:none!important}.jp-art-topline{position:relative;z-index:1;display:flex;justify-content:space-between;font:8px 'DM Mono';letter-spacing:.12em;color:#9e9e9e}.jp-art-label{position:absolute;z-index:2;bottom:18px;left:19px;font:10px 'DM Mono';letter-spacing:.1em;text-transform:uppercase;color:#e5e5e5}.jp-art-portfolio-mark{position:absolute;z-index:1;inset:0;display:grid;place-items:center;font:500 clamp(24px,3.8vw,54px)/.9 'Space Grotesk';letter-spacing:-.1em;color:#e9e9e2}.jp-art-portfolio-mark span{font-weight:300;color:#a9a9a3}.jp-art-portfolio-frame{position:absolute;inset:15%;border:1px solid rgba(230,230,220,.2);transform:rotate(-8deg);pointer-events:none}.jp-art-portfolio-frame:before,.jp-art-portfolio-frame:after{content:"";position:absolute;background:rgba(230,230,220,.16)}.jp-art-portfolio-frame:before{width:1px;height:100%;left:50%;top:0}.jp-art-portfolio-frame:after{height:1px;width:100%;top:50%;left:0}.jp-art-anniversary{position:absolute;left:13%;top:25%;font:500 clamp(22px,3.2vw,45px) 'Space Grotesk';line-height:.78;letter-spacing:-.1em}.jp-art-anniversary span{color:#aaa;font-weight:300}.jp-art-star{position:absolute;right:16%;top:24%;font-size:55px;color:#d2d2d2;text-shadow:0 0 18px rgba(255,255,255,.3)}.jp-art-date{position:absolute;left:13%;bottom:22%;font:8px 'DM Mono';color:var(--muted)}.jp-art-commission{background:radial-gradient(circle at 55% 48%,rgba(210,210,210,.16),transparent 27%),#171717}.jp-art-commission-shape{position:absolute;width:32%;aspect-ratio:1;left:37%;top:21%;border:1px solid #cfcfcf;transform:rotate(45deg);box-shadow:0 0 28px rgba(255,255,255,.1)}.jp-art-commission-shape:after{content:"";position:absolute;inset:19%;border:1px solid #999}.jp-art-commission-copy{position:absolute;left:10%;bottom:20%;font:500 clamp(14px,2vw,27px) 'Space Grotesk';letter-spacing:-.06em;line-height:.9}.jp-art-commission-copy span{font-weight:300;color:#c8c8c8}.jp-art-spark{position:absolute;right:15%;bottom:17%;font:28px 'Space Grotesk';color:#aaa}
         .jp-section{position:relative;padding:150px 0;border-top:1px solid var(--line)}.jp-section-label{display:flex;align-items:center;gap:12px;color:var(--muted);font-family:'DM Mono';font-size:9px;letter-spacing:.17em;text-transform:uppercase}.jp-section-label span:first-child{display:block;width:27px;height:1px;background:var(--cyan)}.jp-about-grid{display:grid;grid-template-columns:40% 1fr;gap:13%;align-items:center;margin-top:64px}.jp-about-image{position:relative;height:550px;max-width:380px;transform:rotate(-3deg)}.jp-about-image img{width:100%;height:100%;object-fit:cover;filter:grayscale(.3);opacity:.8}.jp-about-image:after{content:"JIL / 11.24";position:absolute;bottom:17px;left:17px;font:10px 'DM Mono';letter-spacing:.14em}.jp-about-copy h2,.jp-project-heading h2,.jp-contact h2{font-family:'Space Grotesk';font-weight:300;letter-spacing:-.07em;line-height:.95;font-size:clamp(37px,5.3vw,74px);margin:24px 0}.jp-about-copy h2 span{color:var(--violet)}.jp-body{color:#a6a7ad;max-width:490px;font-size:14px;line-height:1.9}.jp-about-foot{display:flex;gap:35px;margin-top:43px;padding-top:23px;border-top:1px solid var(--line);font:10px 'DM Mono';color:var(--muted)}.jp-about-foot b{display:block;font:22px 'Space Grotesk';color:var(--ink);font-weight:400;margin-bottom:5px}
         .jp-project-heading{display:grid;grid-template-columns:1fr 1fr;gap:15%;align-items:end;margin:55px 0 76px}.jp-project-heading h2{margin:0}.jp-project-heading p{color:var(--muted);font-size:13px;line-height:1.8;max-width:360px;margin:0}.jp-project-grid{display:grid;grid-template-columns:repeat(12,1fr);gap:26px;align-items:start}.jp-project{position:relative;transition:transform .5s}.jp-project:hover{transform:translateY(-9px)}.jp-project:nth-child(1){grid-column:1/6}.jp-project:nth-child(2){grid-column:7/13;margin-top:110px}.jp-project:nth-child(3){grid-column:2/7;margin-top:60px}.jp-project:nth-child(4){grid-column:8/13;margin-top:-20px}.jp-project:nth-child(5){grid-column:1/7;margin-top:70px}.jp-project:nth-child(6){grid-column:8/13;margin-top:10px}.jp-project:nth-child(7){grid-column:2/7;margin-top:60px}.jp-project:nth-child(8){grid-column:8/13;margin-top:-15px}.jp-project:nth-child(9){grid-column:1/8;margin-top:70px}.jp-project-visual{height:315px;position:relative;overflow:hidden;border:1px solid rgba(235,235,225,.2);background:#121319}.jp-project:nth-child(2) .jp-project-visual,.jp-project:nth-child(4) .jp-project-visual,.jp-project:nth-child(6) .jp-project-visual,.jp-project:nth-child(7) .jp-project-visual,.jp-project:nth-child(8) .jp-project-visual{height:265px}.jp-project:nth-child(1) .jp-project-visual,.jp-project:nth-child(3) .jp-project-visual,.jp-project:nth-child(5) .jp-project-visual,.jp-project:nth-child(9) .jp-project-visual{height:315px}.jp-project-visual img{width:100%;height:100%;object-fit:cover;filter:grayscale(.45);opacity:.72;transform:none!important;transition:opacity .4s}.jp-project:hover img{transform:none!important;opacity:.92}.jp-project-visual:after{content:"";position:absolute;inset:0;background:linear-gradient(140deg,transparent 30%,#08090d99)}.jp-project-detail{display:flex;justify-content:space-between;gap:15px;padding:16px 2px;border-bottom:1px solid var(--line)}.jp-project-detail h3{font:500 16px 'Space Grotesk';margin:0 0 6px}.jp-project-detail p{color:var(--muted);font-size:11px;max-width:260px;margin:0;line-height:1.6}.jp-project-meta{font:9px 'DM Mono';color:var(--dim);text-align:right;white-space:nowrap}.jp-project-meta span{display:block;color:var(--cyan);margin-bottom:9px}.jp-project-link{display:flex;align-items:center;gap:6px;margin-top:12px;color:#bfcac5;font:9px 'DM Mono';letter-spacing:.08em}.jp-project-private{color:#999992;cursor:default}.jp-project-private svg{width:11px;height:11px;opacity:.82}
         .jp-journey{display:grid;grid-template-columns:1fr 1fr;gap:15%;align-items:start}.jp-journey-intro h2{font-family:'Space Grotesk';font-size:clamp(38px,5vw,66px);font-weight:300;letter-spacing:-.07em;line-height:.95;margin:24px 0}.jp-journey-intro h2 em{color:var(--cyan);font-style:normal}.jp-timeline{border-top:1px solid var(--line);margin-top:25px}.jp-time-row{display:grid;grid-template-columns:72px 1fr;gap:22px;padding:21px 0;border-bottom:1px solid var(--line);font-size:12px}.jp-time-row time{font:10px 'DM Mono';color:var(--cyan)}.jp-time-row p{color:var(--muted);font-size:11px;line-height:1.6;margin:6px 0 0}.jp-time-preview{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.jp-read-more,.jp-check-link{border:0;background:transparent;color:var(--ink);padding:0;font:10px 'DM Mono';letter-spacing:.08em;text-transform:uppercase;text-decoration:underline;text-underline-offset:4px}.jp-read-more{margin-top:10px}.jp-time-detail{color:#b8b8b8!important;margin-top:12px!important}.jp-additional{margin-top:32px;padding:20px;border:1px solid var(--line);background:rgba(255,255,255,.025)}.jp-additional h3{font:500 18px 'Space Grotesk';margin:0 0 10px}.jp-additional p{color:var(--muted);font-size:12px;line-height:1.8;margin:0}
        .jp-certificates{scroll-margin-top:90px}.jp-certificate-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:26px;margin-top:48px}.jp-certificate-card{border:1px solid rgba(235,235,225,.18);background:#111;overflow:hidden}.jp-certificate-card img{width:100%;height:100%;min-height:255px;object-fit:cover;display:block;filter:grayscale(.3);opacity:.9;transition:filter .4s,opacity .4s}.jp-certificate-card:hover img{filter:grayscale(0);opacity:1}.jp-certificate-card:first-child img{min-height:380px}.jp-certificate-caption{padding:13px 15px;border-top:1px solid var(--line);font:9px 'DM Mono';letter-spacing:.1em;color:var(--muted);text-transform:uppercase}
        .jp-skills{display:flex;flex-wrap:wrap;gap:10px;margin-top:44px;max-width:440px}.jp-skill{border:1px solid var(--line);padding:10px 14px;color:#c9cac5;font:10px 'DM Mono';transition:background .3s,border-color .3s}.jp-skill:hover{background:rgba(168,212,211,.1);border-color:var(--cyan)}
        .jp-contact{padding-bottom:95px}.jp-contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:15%;margin-top:58px}.jp-contact h2{margin-top:18px}.jp-contact h2 span{color:var(--violet)}.jp-contact-links{display:flex;flex-direction:column;gap:15px;margin-top:35px}.jp-contact-links a{display:flex;align-items:center;justify-content:space-between;padding:15px 0;border-bottom:1px solid var(--line);font-size:13px}.jp-contact-links small{color:var(--muted);font:10px 'DM Mono'}.jp-form{border:1px solid var(--line);padding:27px;background:rgba(255,255,255,.025)}.jp-form label{display:block;color:var(--muted);font:9px 'DM Mono';letter-spacing:.13em;text-transform:uppercase;margin-bottom:23px}.jp-form input,.jp-form textarea{display:block;width:100%;border:0;border-bottom:1px solid var(--line);background:transparent;color:var(--ink);padding:10px 0;outline:0;font-size:13px;resize:vertical}.jp-form textarea{min-height:86px}.jp-form input:focus,.jp-form textarea:focus{border-color:var(--cyan)}.jp-form button{display:flex;justify-content:space-between;align-items:center;margin-top:12px;width:100%;padding:13px 0;border:0;background:transparent;color:var(--ink);border-top:1px solid var(--line);font:10px 'DM Mono';letter-spacing:.1em;text-transform:uppercase}.jp-form button:disabled{cursor:wait;opacity:.55}.jp-form-trap{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.jp-success{color:var(--cyan);font:10px 'DM Mono';margin-top:18px;display:flex;gap:8px;align-items:center}.jp-error{color:#d9a0a0;font:10px 'DM Mono';line-height:1.6;margin-top:18px}.jp-footer{border-top:1px solid var(--line);padding:24px 0 32px;display:flex;justify-content:space-between;color:var(--dim);font:9px 'DM Mono';letter-spacing:.08em}
         .jp-reveal{opacity:0;transform:translateY(24px) scale(.985);transition:opacity .9s ease,transform 1s cubic-bezier(.2,.8,.2,1)}.jp-reveal.is-visible{opacity:1;transform:translateY(0) scale(1)}.jp-project-grid .jp-reveal:nth-child(1){transition-delay:.08s}.jp-project-grid .jp-reveal:nth-child(2){transition-delay:.16s}.jp-project-grid .jp-reveal:nth-child(3){transition-delay:.24s}.jp-project-grid .jp-reveal:nth-child(4){transition-delay:.32s}.jp-project-grid .jp-reveal:nth-child(5){transition-delay:.40s}.jp-project-grid .jp-reveal:nth-child(6){transition-delay:.48s}.jp-project-grid .jp-reveal:nth-child(7){transition-delay:.56s}.jp-project-grid .jp-reveal:nth-child(8){transition-delay:.64s}.jp-project-grid .jp-reveal:nth-child(9){transition-delay:.72s}@keyframes jp-twinkle{0%,100%{opacity:.12;transform:scale(.8)}50%{opacity:.95;transform:scale(1.7)}}@keyframes jp-draw{to{stroke-dashoffset:-100}}@keyframes jp-spin{to{transform:rotate(360deg)}}@keyframes jp-spin-reverse{to{transform:rotate(-360deg)}}@keyframes jp-breathe{0%,100%{transform:scale(.92);opacity:.55}50%{transform:scale(1.08);opacity:1}}@keyframes jp-nebula-drift{0%,100%{transform:translate3d(-2%,0,0) scale(1)}50%{transform:translate3d(4%,3%,0) scale(1.12)}}@keyframes jp-dust-drift{0%{transform:translate3d(0,8px,0);opacity:0}18%{opacity:.6}82%{opacity:.28}100%{transform:translate3d(14px,-34px,0);opacity:0}}@keyframes jp-constellation-drift{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(0,-6px,0) scale(1.015)}}@keyframes jp-node{0%,100%{transform:scale(.7);opacity:.55}50%{transform:scale(1.4);opacity:1}}@keyframes jp-bob{50%{transform:translateY(5px)}}@keyframes jp-slide{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
         .jp-project-visual.has-screenshot:after{display:none}.jp-project-visual.has-screenshot{background:#050505;box-shadow:0 18px 50px rgba(0,0,0,.28)}.jp-project-visual.has-screenshot:before{content:"";position:absolute;z-index:2;inset:0;pointer-events:none;background:linear-gradient(180deg,transparent 0%,rgba(255,255,255,.07) 48%,transparent 52%);background-size:100% 220%;mix-blend-mode:screen;animation:jp-scan 7s ease-in-out infinite}.jp-project-visual.has-screenshot .jp-project-visual-art{padding:0}.jp-project-visual.has-screenshot .jp-project-screenshot{filter:grayscale(.12) contrast(1.04) brightness(.95)!important}.jp-project:hover .jp-project-visual.has-screenshot{box-shadow:0 28px 72px rgba(0,0,0,.5)}.jp-additional{position:relative;overflow:hidden;margin-top:32px;padding:23px 22px 21px;border:1px solid rgba(235,235,225,.2);background:linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.015) 55%,rgba(160,160,160,.035));box-shadow:0 24px 70px rgba(0,0,0,.2)}.jp-additional:before{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,transparent 18%,rgba(255,255,255,.06) 19%,transparent 20%);background-size:180% 180%;animation:jp-panel-sheen 9s ease-in-out infinite}.jp-additional>*{position:relative;z-index:1}.jp-additional-topline{display:flex;justify-content:space-between;padding-bottom:15px;border-bottom:1px solid var(--line);color:var(--cyan);font:8px 'DM Mono';letter-spacing:.15em;text-transform:uppercase}.jp-additional h3{font:500 20px 'Space Grotesk';letter-spacing:-.04em;margin:19px 0 11px}.jp-additional-copy{color:#b9b9b5!important;font-size:12px!important;line-height:1.85!important;text-align:justify;margin:0!important}.jp-additional-actions{display:flex;flex-wrap:wrap;gap:20px;margin-top:18px}.jp-additional-actions .jp-check-link{color:#e9e8e0}.jp-certificate-grid{perspective:1200px}.jp-certificate-card{position:relative;border:1px solid rgba(235,235,225,.2);background:linear-gradient(145deg,#171717,#0d0d0d 64%,#191919);overflow:hidden;padding:16px;box-shadow:0 24px 70px rgba(0,0,0,.32);transform:translateZ(0);transition:transform .8s cubic-bezier(.2,.8,.2,1),border-color .5s,box-shadow .8s}.jp-certificate-card:before{content:"";position:absolute;inset:7px;border:1px solid rgba(235,235,225,.08);pointer-events:none}.jp-certificate-card:after{content:"";position:absolute;z-index:0;right:-20%;bottom:-35%;width:70%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,rgba(210,210,210,.13),transparent 66%);filter:blur(8px);pointer-events:none}.jp-certificate-card:hover{transform:translateY(-12px) rotateX(1deg) rotateY(-1deg);border-color:rgba(235,235,225,.45);box-shadow:0 35px 100px rgba(0,0,0,.5)}.jp-certificate-card--leadership{margin-top:58px}.jp-certificate-topline{position:relative;z-index:2;display:flex;justify-content:space-between;margin-bottom:14px;color:#9c9c96;font:8px 'DM Mono';letter-spacing:.14em}.jp-certificate-frame{position:relative;z-index:1;overflow:hidden;border:1px solid rgba(235,235,225,.18);background:#080808}.jp-certificate-frame img{width:100%;height:100%;min-height:0!important;object-fit:cover;display:block;filter:grayscale(.78) contrast(1.05) brightness(.82);opacity:.9;transition:transform 1.1s cubic-bezier(.2,.8,.2,1),filter .8s,opacity .8s}.jp-certificate-card--collage .jp-certificate-frame{aspect-ratio:1.55}.jp-certificate-card--leadership .jp-certificate-frame{aspect-ratio:1.24}.jp-certificate-card:hover .jp-certificate-frame img{transform:scale(1.045);filter:grayscale(.18) contrast(1.08) brightness(.96);opacity:1}.jp-certificate-corner{position:absolute;z-index:3;width:18px;height:18px;border-color:rgba(240,239,231,.72);pointer-events:none}.jp-certificate-corner--tl{top:10px;left:10px;border-top:1px solid;border-left:1px solid}.jp-certificate-corner--br{right:10px;bottom:10px;border-right:1px solid;border-bottom:1px solid}.jp-certificate-scan{position:absolute;z-index:2;left:0;right:0;top:-20%;height:18%;background:linear-gradient(180deg,transparent,rgba(240,239,231,.22),transparent);mix-blend-mode:screen;pointer-events:none;animation:jp-certificate-scan 6s ease-in-out infinite}.jp-certificate-caption{position:relative;z-index:2;display:flex;align-items:end;justify-content:space-between;gap:15px;padding:16px 0 2px;border:0;color:#8f8f8a;font:9px 'DM Mono';letter-spacing:.08em;text-transform:uppercase}.jp-certificate-caption strong{color:#e6e5de;font:500 14px 'Space Grotesk';letter-spacing:-.03em;text-transform:none}.jp-certificate-caption span{text-align:right}.jp-reveal.jp-certificate-card:nth-child(1){transition-delay:.12s}.jp-reveal.jp-certificate-card:nth-child(2){transition-delay:.28s}.jp-project-grid .jp-project:nth-child(2) .jp-project-visual{animation:jp-project-drift 8s ease-in-out infinite}.jp-project-grid .jp-project:nth-child(3) .jp-project-visual{animation:jp-project-drift 9s ease-in-out -2s infinite}.jp-section-label span:first-child{animation:jp-line-pulse 3.5s ease-in-out infinite}.jp-skill{position:relative;overflow:hidden}.jp-skill:after{content:"";position:absolute;inset:0;transform:translateX(-120%);background:linear-gradient(100deg,transparent,rgba(255,255,255,.16),transparent);animation:jp-chip-sheen 5s ease-in-out infinite}.jp-skill:nth-child(2n):after{animation-delay:1.2s}@keyframes jp-scan{0%,35%{background-position:0 -100%}62%,100%{background-position:0 100%}}@keyframes jp-panel-sheen{0%,65%{background-position:150% 150%}100%{background-position:-30% -30%}}@keyframes jp-certificate-scan{0%,18%{transform:translateY(-120%);opacity:0}35%{opacity:.8}72%,100%{transform:translateY(680%);opacity:0}}@keyframes jp-project-drift{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-5px) rotate(.25deg)}}@keyframes jp-line-pulse{0%,100%{transform:scaleX(1);transform-origin:left;opacity:.7}50%{transform:scaleX(1.45);transform-origin:left;opacity:1}}@keyframes jp-chip-sheen{0%,65%{transform:translateX(-120%)}100%{transform:translateX(120%)}}
        @media(min-width:761px) and (max-width:1024px){.jp-project-heading{gap:8%}.jp-project-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:34px 22px}.jp-project,.jp-project:nth-child(n){grid-column:auto!important;margin-top:0!important;width:100%}.jp-project:nth-child(even){margin-top:36px!important}.jp-project-visual,.jp-project:nth-child(n) .jp-project-visual{height:270px}.jp-about-grid,.jp-journey,.jp-contact-grid{gap:8%}}
        @media(max-width:760px){.jp-shell{width:min(100% - 32px,560px)}.jp-nav{height:69px}.jp-nav-form{display:none}.jp-menu-trigger{font-size:9px}.jp-hero{height:calc(100svh - 69px);min-height:0;padding:42px 0 96px}.jp-hero-copy{z-index:6;transform:translateY(-34px)}.jp-title{font-size:clamp(56px,17vw,100px)}.jp-tagline{font-size:12px;padding:0 20px}.jp-profile-portrait{height:390px;width:78%;margin:auto}.jp-section{padding:95px 0}.jp-about-grid,.jp-journey,.jp-contact-grid{grid-template-columns:1fr;gap:52px}.jp-about-image{width:82%;margin:auto}.jp-about-foot{justify-content:space-between;gap:12px}.jp-about-foot>div{font-size:8px}.jp-about-foot b{font-size:20px}.jp-about-copy h2,.jp-project-heading h2,.jp-contact h2{font-size:clamp(40px,12vw,62px)}.jp-project-heading{grid-template-columns:1fr;gap:22px;margin:42px 0}.jp-project-grid{display:flex;flex-direction:column;gap:58px}.jp-project,.jp-project:nth-child(n){width:88%;margin:0!important;align-self:flex-start}.jp-project:nth-child(even){align-self:flex-end}.jp-project-visual,.jp-project:nth-child(n) .jp-project-visual{height:245px}.jp-time-row{grid-template-columns:52px 1fr;gap:14px}.jp-additional-actions{gap:12px}.jp-certificate-grid{grid-template-columns:1fr;gap:20px}.jp-certificate-card--leadership{margin-top:0}.jp-certificate-caption{align-items:start;flex-direction:column;gap:6px}.jp-certificate-caption span{text-align:left}.jp-footer{gap:18px;line-height:1.7}.jp-footer span:last-child{text-align:right}.jp-noise{opacity:.03}}
        @media(prefers-reduced-motion:reduce){.jp-page *,.jp-page *:before,.jp-page *:after{animation:none!important;transition:none!important}}
      `}</style>
      <style>{`
        .jp-scroll-progress{position:fixed;z-index:30;top:0;left:0;width:100%;height:2px;background:var(--ink);transform-origin:left center;box-shadow:0 0 16px rgba(240,238,231,.55);pointer-events:none}
        .jp-ambient-orbit{position:fixed;z-index:0;top:7vh;right:-10vw;width:min(34vw,460px);aspect-ratio:1;border:1px solid rgba(235,235,225,.11);border-radius:50%;opacity:.52;pointer-events:none}
        .jp-ambient-orbit:before,.jp-ambient-orbit:after{content:"";position:absolute;inset:12%;border:1px solid rgba(235,235,225,.08);border-radius:50%;transform:rotate(58deg) scaleX(.55)}
        .jp-ambient-orbit:after{inset:26%;transform:rotate(-42deg) scaleX(.72)}
        .jp-ambient-orbit span{position:absolute;width:5px;height:5px;border-radius:50%;background:#e8e7df;box-shadow:0 0 18px 4px rgba(235,235,225,.24)}
        .jp-ambient-orbit span:nth-child(1){top:12%;left:52%}.jp-ambient-orbit span:nth-child(2){right:9%;top:48%}.jp-ambient-orbit span:nth-child(3){bottom:17%;left:25%}
        .jp-project-visual.has-screenshot{isolation:isolate;background:#0b0b0b!important;overflow:hidden}
        .jp-project-visual.has-screenshot:before{z-index:3}
        .jp-project-visual.has-screenshot .jp-project-visual-art{position:absolute;z-index:1;inset:0;width:100%;height:100%;background:#0b0b0b!important;overflow:hidden}
        .jp-project-visual.has-screenshot .jp-project-screenshot{position:absolute;z-index:1;display:block!important;inset:0;width:100%;height:100%;object-fit:cover;object-position:top center;background:#0b0b0b;visibility:visible!important}
        .jp-project-visual.has-screenshot .jp-project-visual-art:after{display:none!important}
        .jp-project-visual.has-screenshot .jp-project-screenshot[src*="project-jera-jimson-anniversary"]{object-position:center center}
        .jp-project-visual.has-screenshot .jp-project-screenshot[src*="project-hapib-surprise"]{object-position:top center}
        .jp-project-visual.has-screenshot .jp-project-screenshot[src*="project-finding-anomaly"]{object-position:center center}
        .jp-project-visual.has-screenshot .jp-project-screenshot[src*="project-bebi-27-months"]{object-position:center center}
        .jp-project-visual.has-screenshot .jp-project-screenshot[src*="project-26th-monthsary"]{object-position:center center}
        .jp-project-visual.has-screenshot .jp-project-screenshot[src*="project-25th-monthsary"]{object-position:center center}
        .jp-project-visual.has-screenshot .jp-project-screenshot[src*="project-savings-tracker"]{object-position:center center}
        .jp-project-grid .jp-project:nth-child(1) .jp-project-visual.has-screenshot{animation:jp-project-drift 8s ease-in-out -1s infinite}
         .jp-art-portfolio-mark{position:absolute;z-index:2;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(8px,1.25vw,16px);padding:10%;font-family:'Space Grotesk';font-size:clamp(28px,4.4vw,62px);font-weight:300;line-height:.78;letter-spacing:-.095em;text-align:center;white-space:nowrap}
         .jp-art-portfolio-mark strong{display:block;font:600 1em/1 'Space Grotesk';letter-spacing:-.105em;color:#e9e9e2}
         .jp-art-portfolio-mark span{display:block;font:300 .68em/1 'Space Grotesk';letter-spacing:-.09em;color:#a9a9a3}
         .jp-art-portfolio-frame{inset:13% 16%;transform:rotate(-7deg);border-color:rgba(230,230,220,.22)}
         .jp-art-portfolio-frame:before{left:50%;opacity:.7}.jp-art-portfolio-frame:after{top:50%;opacity:.7}
         .jp-art-portfolio-dot{position:absolute;z-index:3;left:22px;bottom:19px;width:5px;height:5px;border-radius:50%;background:#e9e9e2;box-shadow:0 0 12px 2px rgba(233,232,224,.22)}
          .jp-art-wb-mark{position:absolute;z-index:2;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(8px,1.25vw,16px);padding:10%;font-family:'Space Grotesk';font-size:clamp(28px,4.4vw,62px);font-weight:300;line-height:.78;letter-spacing:-.095em;text-align:center;white-space:nowrap}
          .jp-art-wb-mark strong{display:block;font:600 1em/1 'Space Grotesk';letter-spacing:-.105em;color:#e9e9e2}
          .jp-art-wb-mark span{display:block;font:300 .68em/1 'Space Grotesk';letter-spacing:-.09em;color:#a9a9a3}
        @media(max-width:760px){.jp-ambient-orbit{width:70vw;right:-30vw;top:18vh;opacity:.28}.jp-scroll-progress{height:1px}.jp-page button.jp-scroll{left:50%;bottom:35px;gap:6px;font-size:8px;letter-spacing:.1em;opacity:.68}.jp-scroll svg{width:9px;height:9px}}
          @media(max-width:760px){.jp-art-portfolio-mark,.jp-art-wb-mark{font-size:clamp(28px,11vw,46px);gap:9px}.jp-art-portfolio-frame{inset:14% 12%}.jp-art-portfolio-dot{left:17px;bottom:16px;width:4px;height:4px}}
          .jp-certificates .jp-reveal{opacity:1!important;transform:none!important;transition:none!important}.jp-certificates .jp-certificate-card:hover{transform:none;border-color:rgba(235,235,225,.2);box-shadow:0 24px 70px rgba(0,0,0,.32)}.jp-certificates .jp-certificate-card img{transition:none;filter:grayscale(.78) contrast(1.05) brightness(.82);opacity:.9}.jp-certificates .jp-certificate-card:hover .jp-certificate-frame img{transform:none;filter:grayscale(.78) contrast(1.05) brightness(.82);opacity:.9}.jp-certificates .jp-certificate-scan{display:none;animation:none}
          .jp-page .jp-footer{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));align-items:center;gap:0}.jp-page .jp-footer>span:first-child{justify-self:start}.jp-page .jp-footer>span:nth-child(2){position:relative;left:clamp(0px,1.25vw,18px);justify-self:stretch;width:100%;text-align:center;color:#777;font-size:9px;letter-spacing:.16em;line-height:1.4}.jp-page .jp-footer>button{justify-self:end;color:inherit}.jp-footer-back{display:inline-flex;align-items:center;justify-content:flex-end;gap:8px;border:0;background:transparent;padding:0;font:8px 'DM Mono';letter-spacing:.14em;color:inherit;text-transform:uppercase}.jp-footer-back svg{width:14px;height:14px;flex:none;transition:transform .25s ease}.jp-footer-back:hover svg{transform:translate(2px,-2px)}
          @media(max-width:760px){.jp-page .jp-footer{grid-template-columns:repeat(3,minmax(0,1fr));gap:0}.jp-page .jp-footer>span{white-space:nowrap}.jp-page .jp-footer>span:nth-child(2){left:clamp(0px,1vw,5px);font-size:8px;letter-spacing:.11em}.jp-page .jp-footer>button{justify-self:end}.jp-footer-back{gap:5px;font-size:7px;letter-spacing:.1em}.jp-footer-back svg{width:12px;height:12px}}
           .jp-certificates .jp-certificate-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:42px 26px;margin-top:48px;align-items:start}
           .jp-certificates .jp-certificate-card{padding:16px}
           .jp-certificates .jp-certificate-topline span:last-child{max-width:58%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right}
           .jp-certificates .jp-certificate-frame{aspect-ratio:auto;background:#f2f1eb}
           .jp-certificates .jp-certificate-frame img,.jp-certificates .jp-certificate-card:hover .jp-certificate-frame img{width:100%;height:auto;min-height:0;aspect-ratio:auto;object-fit:contain;filter:none;opacity:1;transform:none}
           .jp-certificates .jp-certificate-card--levelled .jp-certificate-frame{aspect-ratio:1500/981;background:#f2f1eb}
           .jp-certificates .jp-certificate-card--levelled .jp-certificate-frame img,.jp-certificates .jp-certificate-card--levelled:hover .jp-certificate-frame img{width:100%;height:100%;object-fit:contain;filter:none;opacity:1;transform:none}
           .jp-certificates .jp-certificate-card--collage .jp-certificate-frame,.jp-certificates .jp-certificate-card--leadership .jp-certificate-frame{aspect-ratio:3/2;background:#080808}
           .jp-certificates .jp-certificate-card--collage .jp-certificate-frame img,.jp-certificates .jp-certificate-card--collage:hover .jp-certificate-frame img,.jp-certificates .jp-certificate-card--leadership .jp-certificate-frame img,.jp-certificates .jp-certificate-card--leadership:hover .jp-certificate-frame img{width:100%;height:100%;object-fit:cover;object-position:center center;filter:none;opacity:1;transform:none}
           .jp-certificates .jp-certificate-caption{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,42%);align-items:end;gap:18px;padding:16px 0 2px}
           .jp-certificates .jp-certificate-caption strong{line-height:1.08}
            .jp-certificates .jp-certificate-caption span{line-height:1.45}
            .jp-badge-section{margin-top:100px;padding-top:52px;border-top:1px solid var(--line)}
            .jp-badge-heading{margin:22px 0 26px;color:var(--muted);font-size:12px;line-height:1.7}
            .jp-badge-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
            .jp-badge-card{min-width:0;padding:12px;border:1px solid rgba(235,235,225,.14);background:rgba(255,255,255,.025)}
            .jp-badge-image{aspect-ratio:1;overflow:hidden;background:#101114}
            .jp-badge-image img{width:100%;height:100%;display:block;object-fit:cover}
            .jp-badge-caption{display:flex;flex-direction:column;gap:5px;padding:11px 1px 2px}
            .jp-badge-caption strong{font:500 12px/1.1 'Space Grotesk';letter-spacing:-.02em;color:var(--ink)}
            .jp-badge-caption span{font:8px/1.45 'DM Mono';letter-spacing:.03em;color:var(--muted)}
             .jp-credly-wrap{display:flex;justify-content:center;margin-top:32px}
             .jp-credly-link{display:inline-flex;align-items:center;gap:10px;border:1px solid rgba(235,235,225,.22);padding:12px 18px;color:#d8d8d1;font:9px 'DM Mono';letter-spacing:.12em;text-transform:uppercase;transition:background .3s,border-color .3s,color .3s}
             .jp-credly-link:hover{background:rgba(255,255,255,.08);border-color:rgba(235,235,225,.52);color:var(--ink)}
           @media(max-width:760px){.jp-certificates .jp-certificate-grid{grid-template-columns:1fr;gap:28px}.jp-certificates .jp-certificate-card{padding:12px}.jp-certificates .jp-certificate-caption{display:flex;align-items:start;flex-direction:column;gap:7px}.jp-certificates .jp-certificate-caption span{text-align:left}.jp-certificates .jp-certificate-topline{font-size:7px}}
            @media(max-width:760px){.jp-badge-section{margin-top:72px;padding-top:38px}.jp-badge-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.jp-badge-card{padding:8px}.jp-badge-caption{padding-top:9px}.jp-badge-caption strong{font-size:11px}.jp-badge-caption span{font-size:7px}}
      `}</style>
      <div className="jp-noise" />
      <StarField />
      <div className="jp-shell">
        <header className="jp-nav">
          <button className="jp-logo" onClick={() => jump("top")} aria-label="Back to top">
            chon.dev
          </button>
          <div className="jp-nav-form" aria-label="Contact prompt">
            <Mail size={12} color="#c8c8c8" />
            <span className="jp-nav-prompt">Got a project idea or opportunity? Send your e-mail</span>
            <button className="jp-send" type="button" onClick={() => jump("contact")} aria-label="Go to contact"><Send size={14} aria-hidden="true" /></button>
          </div>
          <button className="jp-menu-trigger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            <i>{menuOpen ? <X size={13} /> : <Menu size={13} />}</i>
          </button>
        </header>
        {menuOpen && (
          <nav className="jp-menu-overlay">
            <button onClick={() => jump("about")}>01 — About</button>
            <button onClick={() => jump("projects")}>02 — Projects</button>
             <button onClick={() => jump("journey")}>03 — Stack & Timeline</button>
            <button onClick={() => jump("certificates")}>04 — Certificates</button>
             <button onClick={() => jump("badges")}>05 — Badges</button>
             <button onClick={() => jump("contact")}>06 — Contact</button>
          </nav>
        )}

        <motion.section
          className="jp-hero"
          id="top"
          ref={heroRef}
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity, filter: heroBlur }}
        >
          <Reveal className="jp-hero-copy">
            <span className="jp-kicker">Student Web Developer</span>
            <h1 className="jp-title">JIMSON <strong>ILOG</strong></h1>
            <p className="jp-tagline">Crafting digital experiences that captivate and inspire. Building clean, modern web solutions with code and creativity.</p>
          </Reveal>
          <button className="jp-scroll" onClick={() => jump("about")}>Scroll to explore <ChevronDown size={13} /></button>
        </motion.section>

        <section className="jp-section" id="about">
          <Reveal><SectionLabel>01 / ABOUT ME</SectionLabel></Reveal>
          <div className="jp-about-grid">
            <Reveal className="jp-about-image"><ProfilePortrait /></Reveal>
            <Reveal className="jp-about-copy">
              <span className="jp-kicker">About Jimson</span>
              <h2>A developer who builds <span>experiences</span> that matter.</h2>
              <p className="jp-body">Motivated and dedicated Senior High School Student specializing in Information &amp; Communication Technology with a passion for web development. I have experience in front-end development and currently expanding into back-end — eager to apply my skills, learn more, and contribute to professional environments.</p>
              <div className="jp-about-foot"><div><b>13+</b>projects built</div><div><b>94</b>top average</div><div><b><Infinity size={23} /></b>curiosity</div></div>
            </Reveal>
          </div>
        </section>

        <section className="jp-section" id="projects">
          <Reveal><SectionLabel>02 / My projects</SectionLabel></Reveal>
          <Reveal className="jp-project-heading">
            <h2>All types of<br /><span style={{ color: "var(--violet)" }}>projects.</span></h2>
            <p>Welcome to this section, you can explore some sort of my web projects here. Feel free to explore and interact with the projects showcased below.</p>
          </Reveal>
          <div className="jp-project-grid">
            {projects.map((project) => (
              <Reveal className={`jp-project ${project.className}`} key={project.no}>
                <div className={`jp-project-visual ${project.screenshot ? "has-screenshot" : ""}`}><ProjectVisual kind={project.kind} /></div>
                <div className="jp-project-detail">
                  <div><h3>{project.title}</h3><p>{project.description}</p>{project.private ? <span className="jp-project-link jp-project-private" aria-label={`${project.title} is private`}><LockKeyhole size={11} aria-hidden="true" />Private</span> : <a className="jp-project-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.label} <ExternalLink size={11} /></a>}</div>
                  <div className="jp-project-meta"><span><ArrowUpRight size={14} /></span>WEB<br />BUILD</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="jp-section" id="journey">
          <div className="jp-journey">
            <Reveal className="jp-journey-intro">
              <SectionLabel>03 / My tech stack + tools</SectionLabel>
              <h2>Curiosity is <em>infinite.</em></h2>
              <p className="jp-body">Tech stacks shift constantly. What endures is the instinct to ask the right questions.</p>
              <div className="jp-skills">
                {["HTML5", "CSS3", "JAVASCRIPT", "TYPESCRIPT", "REACT", "VITE", "PYTHON", "NODE.JS", "FIGMA", "TAILWIND", "LOVABLE", "GITHUB", "NETLIFY", "VERCEL", "GEMINI", "CLAUDE", "GROK", "REPLIT", "ANTIGRAVITY"].map((skill) => <span className="jp-skill" key={skill}>{skill}</span>)}
              </div>
            </Reveal>
            <Reveal className="jp-timeline">
              {timeline.map((item) => (
                <div className="jp-time-row" key={item.year}>
                  <time>{item.year}</time>
                  <div>
                    <p className={openYear === item.year ? "jp-time-detail" : "jp-time-preview"}>{item.content}</p>
                    <button className="jp-read-more" onClick={() => setOpenYear(openYear === item.year ? null : item.year)}>
                      {openYear === item.year ? "Read less" : "Read more"}
                    </button>
                  </div>
                </div>
              ))}
              <div className="jp-additional">
                <div className="jp-additional-topline"><span>NOTE / 03</span><span>PERSONAL CONTEXT</span></div>
                <h3>Additional information</h3>
                <button className="jp-check-link jp-additional-read" onClick={() => setShowAdditional(!showAdditional)}>{showAdditional ? "Hide details" : "Read me"}</button>
                {showAdditional && (
                  <>
                    <p className="jp-additional-copy">I’m also a consistent with honors, I always got line of 9 average and I never fail when it comes to academic achievement, I’m also a leader and I know how to handle a good team. I have certification on “student leadership training” and that serves as an instrument to become a good and trained leader. I have much more academic certificates but It’s not complete since the other certs got lost and I don’t know where can I find it.</p>
                    <div className="jp-additional-actions">
                      <button className="jp-check-link" onClick={() => jump("certificates")}>Check here / leadership</button>
                      <button className="jp-check-link" onClick={() => jump("certificates")}>Check here / certificates</button>
                    </div>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="jp-section jp-certificates" id="certificates">
          <Reveal><SectionLabel>04 / Certificates &amp; recognition</SectionLabel></Reveal>
          <Reveal className="jp-project-heading">
            <h2>Proof of<br /><span style={{ color: "var(--violet)" }}>the hard work.</span></h2>
            <p>From web development and AI fundamentals to focused front-end practice, each credential marks another step forward.</p>
          </Reveal>
          <div className="jp-certificate-grid">
            {certificates.map((certificate, index) => (
              <Reveal className={`jp-certificate-card ${
                certificate.image === "certificate-springer-capital.jpeg" || certificate.image === "certificate-codesignal-html.jpeg"
                  ? "jp-certificate-card--levelled"
                  : certificate.image === "jimson-certificates-collage.jpeg"
                    ? "jp-certificate-card--collage"
                    : certificate.image === "jimson-leadership-certificate.jpeg"
                      ? "jp-certificate-card--leadership"
                      : ""
              }`} key={certificate.image}>
                <div className="jp-certificate-topline">
                  <span>ARCHIVE / {String(index + 1).padStart(2, "0")}</span>
                  <span>{certificate.issuer}</span>
                </div>
                <div className="jp-certificate-frame">
                  <span className="jp-certificate-corner jp-certificate-corner--tl" />
                  <span className="jp-certificate-corner jp-certificate-corner--br" />
                  <img src={assetPath(certificate.image)} alt={certificate.alt} loading="lazy" />
                </div>
                <div className="jp-certificate-caption">
                  <strong>{certificate.title}</strong>
                  <span>{certificate.issuer} / {certificate.date}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="jp-badge-section" id="badges">
            <Reveal><SectionLabel>05 / Badges &amp; micro-credentials</SectionLabel></Reveal>
            <Reveal className="jp-badge-heading">
              <p>Small verified milestones from the platforms where I keep learning.</p>
            </Reveal>
            <div className="jp-badge-grid">
              {badges.map((badge) => (
                <Reveal className="jp-badge-card" key={badge.image}>
                  <div className="jp-badge-image"><img src={assetPath(badge.image)} alt={badge.alt} loading="lazy" /></div>
                  <div className="jp-badge-caption"><strong>{badge.title}</strong><span>Earned via {badge.issuer}</span></div>
                </Reveal>
              ))}
            </div>
            <div className="jp-credly-wrap">
              <a className="jp-credly-link" href="https://www.credly.com/users/chon-ilog" target="_blank" rel="noopener noreferrer" aria-label="Verify Jimson Ilog's credentials on Credly">
                Verify credentials on Credly <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="jp-section jp-contact" id="contact">
          <Reveal><SectionLabel>06 / START A CONVERSATION</SectionLabel></Reveal>
          <div className="jp-contact-grid">
            <Reveal>
              <h2>Have a good idea?<br /><span>Let’s talk.</span></h2>
              <p className="jp-body">Have something worth building? Share the idea, and let’s shape it into a thoughtful digital experience together.</p>
              <div className="jp-contact-links">
                <a href="https://www.facebook.com/share/1EhmvjkaDP/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><span>Jimson Ilog</span><Facebook size={15} /></a>
                <a href="https://www.instagram.com/hey.chon?igsh=aWc4djRjcXRtb25z&utm_source=qr" target="_blank" rel="noopener noreferrer"><span>hey.chon</span><Instagram size={15} /></a>
                <a href="https://github.com/hey-chon" target="_blank" rel="noopener noreferrer"><span>hey-chon</span><Github size={15} /></a>
              </div>
            </Reveal>
            <Reveal className="jp-form">
              <form name="contact" method="POST" action="https://formspree.io/f/meajqvor" onSubmit={submit}>
                <label>YOUR EMAIL<input required name="email" type="email" maxLength={254} autoComplete="email" placeholder="yourname@gmail.com" /></label>
                <label>YOUR NOTE<textarea required name="message" maxLength={5000} placeholder="Tell me a little about what you're building..." /></label>
                <div className="jp-form-trap" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty<input id="website" name="website" tabIndex={-1} autoComplete="off" /></label>
                </div>
                <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send message"} <ArrowUpRight size={15} /></button>
                {sent && <div className="jp-success" role="status"><Check size={14} /> Message noted — thank you.</div>}
                {formError && <div className="jp-error" role="alert">{formError}</div>}
              </form>
            </Reveal>
          </div>
        </section>

        <footer className="jp-footer"><span>© 2026 chon</span><span>To God Be The Glory</span><button className="jp-footer-back" onClick={() => jump("top")} aria-label="Go back to top"><span>Go back</span><ArrowDownRight size={14} /></button></footer>
      </div>
    </main>
  );
}

export default JimsonPortfolio;