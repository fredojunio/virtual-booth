# 🌐 Virtual Booth Experience  
*Inspired by the Istana Heritage Gallery Tour*

> A **seamless online experience** for event attendees to revisit sponsor booths—even after the event has concluded.  
> Built for the **World Toilet Day Loo Awards 2025**, this platform ensures lasting engagement between attendees and sponsors.

---

## 🎯 Project Vision

- Modeled after the **[Istana Heritage Gallery Tour](https://www.istana.gov.sg/visit-the-istana/istana-heritage-gallery)**  
- Enables attendees to **explore sponsor booths post-event**  
- Helps sponsors **extend their reach** with on-demand access to company info, videos, and mission  
- Supports **tiered sponsor experiences** (Bronze, Silver, Gold) with scalable interactivity

---

## 🖼️ Website Structure

### 🏠 **Landing Page**
- **3D-rendered toilet backdrop** aligned with the World Toilet Day theme  
- Four main interactive buttons:
  1. **What is the Loo Awards?**  
  2. **More about Restroom Association Singapore**  
  3. **Donate towards the cause**  
  4. **Want to join as a sponsor?**  
- **Sponsor stars/icons** overlaid on the background — each representing a virtual booth

> 💡 *“Each star represents a virtual booth led by an individual sponsor.”*

---

### 🔘 **Interactive Buttons**

| Button | Purpose | Destination |
|-------|--------|-------------|
| **What is the Loo Awards?** | Explain the annual event & World Toilet Day | Info page about the awards’ purpose and history |
| **More about Restroom Association Singapore** | Showcase the organizing body | Page detailing RAS’s mission, background, and impact |
| **Donate towards the cause** | Support frontline cleaners | Redirect to **[Sanigives](https://sanigives.org)** |
| **Want to join as a sponsor?** | Recruit future sponsors | Page outlining sponsorship benefits for 2026 |

---

### 🌟 **Sponsor Virtual Booths**

- Clicking a sponsor star opens their **dedicated booth page**
- **Background**: Real photo of the sponsor’s physical booth (taken on event day)
- **Overlay hotspots** (clickable elements) appear on the booth image:
  - Company video  
  - Mission statement  
  - Contact or “Learn More” links  
- **All tiers (Bronze/Silver/Gold)** get **at least one hotspot**
- **Higher-tier sponsors** (e.g., Gold) can have **additional clickpoints** for richer content

> Example:  
> *“If sponsor is on higher tier, more clickpoints can be added (e.g., this text box could be a click point).”*

---

## 🛠️ Tech Implementation

- **Framework**: React.js  
- **Styling**: Tailwind CSS (fully responsive)  
- **Interactivity**: Image-based hotspots using absolute positioning  
- **No external libraries** — lightweight and fast

---

## 📂 Customization Guide

1. **Replace 3D backdrop** with final render  
2. **Upload real sponsor booth photos**  
3. **Map sponsor logos or stars** to correct positions  
4. **Configure hotspot coordinates** per booth (adjust % values)  
5. **Update links** (Sanigives, sponsor inquiry form, etc.)

---

## 🚀 Getting Started

```bash
git clone <repo-url>
cd virtual-booth
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the experience.

---

## 🌍 Deployment

Deploy instantly via:
- **Vercel**
- **Netlify**
- **GitHub Pages**

---

## 📄 License

MIT License — free to use for non-profit and community-driven initiatives.

---

> **“Sanitation is dignity. Clean restrooms are a right, not a privilege.”**  
> — Restroom Association Singapore

✨ Built for **World Toilet Day 2025** | Inspired by the **Istana Heritage Gallery Tour** ✨
