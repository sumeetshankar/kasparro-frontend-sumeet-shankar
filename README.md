# Kasparro – AI-Native SEO Platform (Frontend)

This repository contains the frontend implementation of **Kasparro**, an AI-native SEO and Brand Intelligence platform designed for the AI-first search era (ChatGPT, Gemini, Perplexity, etc.).

The purpose of this project is to demonstrate **system-level thinking, frontend architecture, and product design maturity**, rather than visual polish alone.

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- Component-based architecture
- Typed mock data (no backend dependency)

---

## 🧠 Product Overview

Kasparro helps brands understand **how AI systems interpret, reason about, and recommend them**.

Traditional SEO focuses on keywords and backlinks.  
Kasparro focuses on **context, authority, and AI reasoning**.

The platform is designed to model how modern LLM-driven systems interpret brand presence across the web.

---

## 🧭 System Architecture Overview

Kasparro is designed as a modular AI system with clearly defined stages:

Inputs
↓
InputAssembler
↓
ContextPack
↓
Audit Modules
↓
Output Surfaces



Each stage is intentionally separated to reflect real-world AI system design.

---

## 🔹 Inputs

Raw signals collected from the AI-visible ecosystem:

- Brand websites
- Public citations and mentions
- Competitor entities
- AI prompt patterns
- Knowledge graph signals

---

## 🔹 InputAssembler

Transforms raw inputs into structured, machine-readable data:

- Entity extraction  
- Content normalization  
- Prompt alignment  

This layer ensures consistency before analysis.

---

## 🔹 ContextPack

A structured representation of brand meaning used by AI systems:

- Brand entities  
- Topical authority signals  
- Trust and sentiment context  

This acts as the “mental model” AI systems use when reasoning about a brand.

---

## 🔹 Audit Modules

Independent evaluators that analyze brand performance inside AI systems:

- AI Visibility Index  
- Prompt Presence  
- Brand Sentiment  
- Citation Tracking  
- Competitor AI Share  
- Content Authority  
- AI Crawlability  

Each module operates independently and produces structured, comparable insights.

---

## 🔹 Output Surfaces

Actionable insights delivered to users:

- Dashboard metrics  
- Module-level diagnostics  
- Recommendations  
- Trend analysis  

---

## 📁 Folder Structure

src/
├── app/
│ ├── page.tsx # Marketing homepage
│ ├── platform/ # Product explanation pages
│ ├── about/ # Mission & vision
│ └── app/ # Authenticated product shell
│ ├── dashboard/
│ ├── audit/
│ └── architecture/
│
├── components/
│ ├── layout/ # Global layout components
│ ├── home/ # Landing page sections
│ ├── platform/ # Product explanation components
│ ├── app/ # Dashboard UI components
│ └── shared/ # Reusable UI primitives
│
├── data/ # Typed mock data
├── types/ # Shared TypeScript interfaces



---

## 🧠 Data Modeling Philosophy

- All UI is driven by strongly typed mock data  
- No hardcoded values inside components  
- Easy to replace mock data with real APIs  
- Predictable, debuggable state flow  

Example:

```ts
interface AuditModule {
  id: string;
  name: string;
  score: number;
  insights: string[];
  issues: string[];
  recommendations: string[];
}
