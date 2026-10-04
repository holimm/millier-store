import { BlogType } from "@/models/blogModel";

/**
 * Cover + inline photography sourced from Unsplash (https://unsplash.com/license).
 * Free to use; credits linked per post via images.creditUrl.
 */
export const mockBlogs: BlogType[] = [
  {
    _id: "blog-1",
    idTitle: "weekend-bag-that-doesnt-explode",
    title: "How I pack a weekend bag that doesn’t explode by Friday night",
    chapeau:
      "A simple packing rule that keeps chargers, clothes, and a laptop from turning into a zipper war.",
    content: `<p>Every Thursday I tell myself the same lie: “I’ll pack tomorrow morning.” Every Friday at 7:40 a.m. I am kneeling on a half-zipped bag, hunting for one cable that was “right here.”</p>
<p>After a stretch of messy weekend trips — friend’s wedding, coastal hike, last-minute family visit — I stopped trying to pack “everything useful” and started packing for the version of the weekend I actually live.</p>
<img src="/assets/img/blogs/inline-packing.jpg" alt="Open suitcase and travel gear laid out on a bed before packing" />
<h2>The two-outfit rule (and why it works)</h2>
<p>I pack two complete outfits that can remix into three days. Not five “just in case” tops. Not a jacket for a climate I’m not visiting. If the weekend has one dressy moment, that piece earns its space. Everything else has to justify the weight.</p>
<p>The same rule applies to tech. Phone, laptop if I truly need it, one charger brick, one short cable, earbuds. A second brick almost never saves me — a power strip at the destination usually does.</p>
<img src="/assets/img/blogs/inline-notebook.jpg" alt="Notebook and pen on a wooden table for a simple packing list" />
<h2>Make a “launch pad” the night before</h2>
<p>I keep a small tray by the door: wallet, keys, earbuds, charger, meds. When those items live in the same place all week, Friday packing becomes confirmation, not archaeology.</p>
<p>If I’m bringing a laptop, it goes in last, sleeve closed, so I’m not compressing clothes around a rigid rectangle I might not even open.</p>
<h2>What I leave behind on purpose</h2>
<p>The portable battery “for emergencies.” The extra pair of shoes that only match one outfit. The full toiletry kit when the hotel already has soap. Leaving things behind is a skill. The bag should feel slightly underfilled when you zip it — that’s how you know you’ll still like carrying it on Sunday.</p>
<p>Next weekend, try packing 20 minutes earlier than usual and stopping when the bag still has a little air in it. You will forget something small. You will survive. And you might enjoy the trip more because you’re not wrestling a zipper in the hallway.</p>`,
    category: "Guides",
    tags: ["travel", "packing", "everyday carry"],
    readTime: "6 min read",
    images: {
      thumbnail: "/assets/img/blogs/hero-weekend-bag.jpg",
      alt: "Friends looking at a map together during a road trip stop",
      credit: "Unsplash — Dulcey Lima",
      creditUrl: "https://unsplash.com/photos/cc02fe5d8800",
    },
    author: {
      name: "Maya Chen",
      role: "Editor",
      date: "2024-05-12",
    },
    date: "2024-05-12",
  },
  {
    _id: "blog-2",
    idTitle: "week-of-cafe-work",
    title: "I worked from cafés for a week. Here’s what actually mattered",
    chapeau:
      "Not the Wi‑Fi password. Not the aesthetic. The boring stuff that decides whether you get anything done.",
    content: `<p>I romanticized café work for years: latte art, soft jazz, the hum of strangers. Then I tried doing it for five straight weekdays while finishing a real project with deadlines. By Wednesday I had opinions. Strong ones.</p>
<img src="/assets/img/blogs/inline-cafe-notes.jpg" alt="Person writing notes in a notebook at a café table" />
<h2>Seats beat scenery</h2>
<p>The prettiest café near me has stools that wreck your lower back in 40 minutes. The slightly uglier place two blocks over has chairs with actual lumbar support and outlets that aren’t decorative. Guess which one got my money.</p>
<p>Before you commit to a table, check three things: a chair you can sit in for two hours, an outlet within one cable length, and a noise level that matches your brain that day. Some people need murmur. I need enough quiet to hear my own sentences.</p>
<img src="/assets/img/blogs/inline-commute.jpg" alt="City street view during a weekday commute" />
<h2>The 90-minute rule</h2>
<p>Café sessions go sour when they stretch forever. I work in 90-minute blocks, then leave — even if the coffee is unfinished. That constraint made me sharper. It also stopped me from turning “I’m writing” into “I’m refreshing email while judging strangers’ pastry orders.”</p>
<h2>What I brought (and what I stopped bringing)</h2>
<p>Laptop, notebook, earbuds, water bottle. That’s it. The portable monitor stayed home. So did the second mouse. If a task needs a multi-screen setup, a café is the wrong venue for it. Save that for the desk day.</p>
<p>One more unsexy tip: decide your order before you walk in. Decision fatigue is real before 9 a.m., and hovering at the counter while your bag blocks the line is a fast way to feel like you don’t belong there.</p>
<p>I still love café days. I just treat them like a tool now, not a personality. Two focused blocks in a good chair beat five hours of aesthetic drifting every time.</p>`,
    category: "Stories",
    tags: ["remote work", "routines", "focus"],
    readTime: "7 min read",
    images: {
      thumbnail: "/assets/img/blogs/hero-cafe-laptop.jpg",
      alt: "Two people collaborating on a laptop in a bright café",
      credit: "Unsplash — Brooke Cagle",
      creditUrl: "https://unsplash.com/photos/66273c2fd55f",
    },
    author: {
      name: "Jordan Blake",
      role: "Contributor",
      date: "2024-06-03",
    },
    date: "2024-06-03",
  },
  {
    _id: "blog-3",
    idTitle: "travel-photos-that-feel-like-you-were-there",
    title: "The travel photos that still feel like I was there",
    chapeau:
      "A few habits that make trip photos feel like memory — not a highlight reel you never reopen.",
    content: `<p>I used to come home with 900 near-identical photos of the same overlook. Scrolling them felt like work. The pictures that still stop me aren’t the perfect ones. They’re the ones that smell like the day.</p>
<img src="/assets/img/blogs/inline-coast-cliff.jpg" alt="Coastal cliffs and ocean under soft daylight" />
<h2>Shoot the in-between</h2>
<p>Train windows. The messy breakfast table. Someone tying a shoe. A street that wasn’t on the itinerary. Those frames carry context. When you look back, you remember temperature and mood, not just the postcard moment.</p>
<p>I try to take ten “boring” photos for every “epic” one. The ratio keeps me present. It also means I’m not only lifting my phone when the light is flattering.</p>
<img src="/assets/img/blogs/inline-camera-hands.jpg" alt="Hands holding a camera while framing a shot outdoors" />
<h2>One subject, three distances</h2>
<p>When something catches my eye — a doorway, a shoreline, a market stall — I take a wide shot, a medium shot, and a detail. Later, those three tell a small story: place, relationship, texture. One lonely wide shot rarely does.</p>
<h2>Stop editing on the plane</h2>
<p>I used to filter everything before landing. Now I wait a week. Distance makes the keepers obvious. The photo you fought to “save” with heavy edits usually wasn’t that good. The quiet one with good light often was.</p>
<p>If you only change one habit on your next trip, make it this: put the phone down for the first five minutes at each new place. Look first. Then shoot. Your photos will thank you, and so will the version of you who wanted to be there — not just document being there.</p>`,
    category: "Tips",
    tags: ["photography", "travel", "memory"],
    readTime: "5 min read",
    images: {
      thumbnail: "/assets/img/blogs/hero-travel-photo.jpg",
      alt: "Sunlight through trees on a quiet forest hiking path",
      credit: "Unsplash — Lukasz Szmigiel",
      creditUrl: "https://unsplash.com/photos/b586d89ba3ee",
    },
    author: {
      name: "Priya Shah",
      role: "Photo Editor",
      date: "2024-04-18",
    },
    date: "2024-04-18",
  },
  {
    _id: "blog-4",
    idTitle: "calm-desk-without-buying-everything",
    title: "Build a calmer desk without turning it into a shopping list",
    chapeau:
      "Most desk makeovers fail because they start with purchases. Start with subtraction instead.",
    content: `<p>My desk used to look busy even when I wasn’t. Three notebooks. A tangle of cables that all looked identical. A plant I kept forgetting to water, which somehow made the guilt worse. I didn’t need a new aesthetic. I needed fewer decisions in my eyeline.</p>
<img src="/assets/img/blogs/inline-desk-plant.jpg" alt="Laptop open on a clean wooden desk near a window" />
<h2>Clear the surface for three days</h2>
<p>I took everything off except the computer, a lamp, and a glass of water. Sticky notes went into a single pad in a drawer. Chargers went into a small box. If I didn’t reach for something in three days, it didn’t earn a permanent spot back on the wood.</p>
<p>That experiment was more useful than any “desk tour” video. You learn what you actually use when you’re not negotiating with clutter.</p>
<img src="/assets/img/blogs/inline-cable-tidy.jpg" alt="Neatly arranged workspace cables and electronics on a desk" />
<h2>One home for cables</h2>
<p>I stopped buying mystery cables “for later.” Every cable I keep has a job and a home: a fabric sleeve behind the monitor, or a pouch in the drawer. If a cable can’t be named in one sentence — “charges phone,” “displays to TV” — it leaves.</p>
<h2>Light before objects</h2>
<p>A warmer lamp changed my evenings more than a new mousepad. Harsh overhead light makes every unfinished task feel louder. Soft side light makes the same desk feel finished even when the to-do list isn’t.</p>
<p>You can buy beautiful organizers later, if you still want them. First, give yourself a week with less stuff in view. Calm is often what remains after you stop auditioning objects for a role they never earned.</p>`,
    category: "Guides",
    tags: ["workspace", "productivity", "minimalism"],
    readTime: "6 min read",
    images: {
      thumbnail: "/assets/img/blogs/hero-calm-desk.jpg",
      alt: "Bright modern office interior with clean desks and large windows",
      credit: "Unsplash — Nastuh Abootalebi",
      creditUrl: "https://unsplash.com/photos/37526070297c",
    },
    author: {
      name: "Owen Park",
      role: "Workspace Writer",
      date: "2024-03-09",
    },
    date: "2024-03-09",
  },
  {
    _id: "blog-5",
    idTitle: "walking-meetings-changed-my-week",
    title: "The walking meeting that quietly fixed my afternoons",
    chapeau:
      "I didn’t need another productivity system. I needed to leave the chair.",
    content: `<p>By 2:30 p.m. my brain would turn to wet cardboard. I’d stare at a paragraph, rewrite the same sentence, then open a tab that helped no one. A coworker suggested a walking 1:1. I agreed mostly to be polite. Two weeks later it was the best meeting on my calendar.</p>
<img src="/assets/img/blogs/inline-park-path.jpg" alt="Sunlit path through green trees in a quiet park" />
<h2>Why talking while moving works</h2>
<p>Side-by-side conversation removes the weird intensity of facing each other across a table. Silences feel less awkward. Ideas come out half-formed and that’s fine — walking gives them room. We solve fewer “status updates” and more actual stuck points.</p>
<p>I keep these meetings short: 25–30 minutes, one neighborhood loop, phones on silent unless we’re pulling up a note. If something needs a screen, we schedule a separate desk block. Walking isn’t for shared docs. Walking is for thinking out loud.</p>
<img src="/assets/img/blogs/inline-rain-window.jpg" alt="Raindrops on a window with soft outdoor light beyond the glass" />
<h2>Weather is part of the point</h2>
<p>Light rain still works with a jacket. Extreme heat doesn’t. Having a backup indoor loop — a long hallway, a covered arcade — keeps the habit alive when the sky refuses to cooperate.</p>
<h2>If you work alone</h2>
<p>You don’t need a meeting partner. I do a solo “walk review” twice a week: no podcast for the first ten minutes, then voice notes for anything that surfaces. It’s surprising how many problems shrink when your legs are moving and your inbox isn’t.</p>
<p>I’m not anti-desk. I’m anti-sitting-through-a-fog I could have walked off. If your afternoons keep dissolving, try one outdoor conversation this week. Leave the slides behind. Bring better questions.</p>`,
    category: "Stories",
    tags: ["health", "meetings", "habits"],
    readTime: "5 min read",
    images: {
      thumbnail: "/assets/img/blogs/hero-walking-city.jpg",
      alt: "People walking across a city crosswalk on a clear day",
      credit: "Unsplash — Anders Jildén",
      creditUrl: "https://unsplash.com/photos/209bfaa8edc8",
    },
    author: {
      name: "Sam Rivera",
      role: "Staff Writer",
      date: "2024-07-21",
    },
    date: "2024-07-21",
  },
  {
    _id: "blog-6",
    idTitle: "night-photos-without-the-myths",
    title: "Night photos without the myths (and without the blurry skyline)",
    chapeau:
      "Low light doesn’t require expensive gear. It requires slower hands and fewer excuses.",
    content: `<p>Ask people why their night photos look soft and you’ll hear the same myths: “My phone is bad at night.” “I need pro mode.” “Night mode ruins color.” Sometimes those things matter. Usually, the photo failed for a simpler reason — we asked a tiny sensor to freeze a dark world while we kept moving.</p>
<img src="/assets/img/blogs/inline-street-lights.jpg" alt="City skyline and street lights glowing after sunset" />
<h2>Brace before you press</h2>
<p>Elbows in. Phone against a railing, lamp post, or your own nose if you have to. Night exposures are longer than they feel. If your body is a tripod, you win more often than if your arms are floating in the wind.</p>
<p>I take three frames of anything I care about. The first is usually a rehearsal. The second is better. The third is the one I keep.</p>
<img src="/assets/img/blogs/inline-night-bridge.jpg" alt="Illuminated city buildings reflecting on water at night" />
<h2>Let night mode finish</h2>
<p>Night mode isn’t broken when the countdown feels slow — that’s the point. Tap, hold still, breathe. If you yank the phone away early, you get the blur you blamed on the camera.</p>
<p>Also: clean the lens. Pocket lint and restaurant grease scatter streetlights into foggy blobs. A shirt hem is not elegant, but it works.</p>
<h2>Expose for the lights you love</h2>
<p>Tap the brightest sign or window in the frame so highlights don’t blow out into white holes. Shadows can stay dark. Night photos feel honest when they keep some mystery.</p>
<p>You don’t need a perfect skyline. You need one sharp frame of a place that felt alive. Slow down for that frame, and the myths get quieter.</p>`,
    category: "Tips",
    tags: ["photography", "night", "how-to"],
    readTime: "4 min read",
    images: {
      thumbnail: "/assets/img/blogs/hero-night-city.jpg",
      alt: "Tall city buildings lit up at night against a dark sky",
      credit: "Unsplash — Pedro Lastra",
      creditUrl: "https://unsplash.com/photos/65ba15a82390",
    },
    author: {
      name: "Chris Nguyen",
      role: "Contributor",
      date: "2024-02-14",
    },
    date: "2024-02-14",
  },
  {
    _id: "blog-7",
    idTitle: "shared-apartment-tech-peace-treaty",
    title: "A tech peace treaty for anyone sharing walls (or Wi‑Fi)",
    chapeau:
      "Roommates don’t need matching taste. They need a few rules that keep evenings livable.",
    content: `<p>I’ve lived with the friend who takes calls on speaker in the kitchen, the roommate whose gaming headset still leaks bass at midnight, and the well-meaning guest who resets the router “to fix it.” Shared housing doesn’t fail because of tech. It fails because nobody agreed on the etiquette.</p>
<img src="/assets/img/blogs/inline-study-table.jpg" alt="Students studying together at a shared table with laptops" />
<h2>Name the shared resources</h2>
<p>Write down what everyone depends on: Wi‑Fi, the outlet cluster near the couch, the living-room TV, the one quiet corner that isn’t really quiet. Once it’s named, you can rotate fairness instead of simmering.</p>
<p>Our simplest rule: headphones after 10 p.m. in common areas. Not because music is evil — because walls are thin and mornings come early.</p>
<img src="/assets/img/blogs/inline-bookshelf.jpg" alt="Bookshelf filled with books in a shared living space" />
<h2>Create a “do not touch” shelf</h2>
<p>Chargers, hard drives, cameras — anything expensive or personal — gets a labeled shelf or bin. Borrowing is fine when it’s asked for. Surprise borrowing is how trust dies over an $18 cable.</p>
<h2>The router is not a group project</h2>
<p>One person owns restarts and ISP calls. Everyone else gets the password on a shared note. If the internet dies, you text that person before you start unplugging mystery boxes behind the TV.</p>
<p>You don’t need a roommate contract written by a lawyer. You need ten minutes of honesty and a couple of defaults. Shared space gets kinder when the invisible stuff — noise, bandwidth, batteries — has a plan.</p>`,
    category: "Guides",
    tags: ["students", "roommates", "home"],
    readTime: "6 min read",
    images: {
      thumbnail: "/assets/img/blogs/hero-student-room.jpg",
      alt: "Bright shared hostel-style room with bunk beds by a large window",
      credit: "Unsplash — Toa Heftiba",
      creditUrl: "https://unsplash.com/photos/bab0e564b8d5",
    },
    author: {
      name: "Elena Ortiz",
      role: "Lifestyle Editor",
      date: "2024-08-08",
    },
    date: "2024-08-08",
  },
  {
    _id: "blog-8",
    idTitle: "questions-people-ask-before-upgrading",
    title: "The questions people ask us right before they upgrade",
    chapeau:
      "After enough floor conversations, the patterns get clear — and they’re rarely about the newest chip name.",
    content: `<p>I used to think people walked into a store chasing specs. After enough conversations behind the counter, I learned most upgrades start with a quieter sentence: “I’m tired of this feeling slow,” or “I just want fewer chargers,” or “Can you tell me if I’m being dramatic?”</p>
<img src="/assets/img/blogs/inline-handshake.jpg" alt="Two people talking across a table during a friendly conversation" />
<h2>“Will this fix my actual problem?”</h2>
<p>Sometimes yes. A cracked battery that dies by lunch deserves a new device or a repair — not another motivational wallpaper. Sometimes no. If the frustration is “I can’t find my files,” a newer phone won’t organize your life. We try to name the problem before we name a model.</p>
<h2>“What am I giving up?”</h2>
<p>Every upgrade has a trade. A lighter laptop may mean fewer ports. A smaller phone may mean a smaller battery. People relax when the trade is spoken out loud. Nobody likes discovering the compromise after the box is open.</p>
<img src="/assets/img/blogs/inline-conversation-notes.jpg" alt="Person reviewing notes and planning next steps at a desk" />
<h2>“Can I wait?”</h2>
<p>This is my favorite honest question. If your device is fine and you’re mostly restless, waiting is underrated. If you’re already carrying a portable charger everywhere and avoiding apps that used to be easy, waiting is just prolonging the annoyance.</p>
<p>We don’t need everyone to upgrade. We need people to leave with clarity — whether that means a new device, a better case and cable setup, or permission to keep what they have for another year. The best floor conversations end with someone saying, “Okay. Now I know.”</p>`,
    category: "Behind the scenes",
    tags: ["retail", "advice", "upgrades"],
    readTime: "5 min read",
    images: {
      thumbnail: "/assets/img/blogs/hero-store-chat.jpg",
      alt: "Smiling shopkeeper helping a customer pay by phone at a bright store counter",
      credit: "Unsplash — Blake Wisz",
      creditUrl: "https://unsplash.com/photos/0cfed4f6a45d",
    },
    author: {
      name: "Taylor Brooks",
      role: "Store Correspondent",
      date: "2024-09-02",
    },
    date: "2024-09-02",
  },
];
