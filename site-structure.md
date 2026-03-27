● web/                                                                    
  ├── public/                                                             
  │   └── images/                                                           │       ├── fleet.jpg                                                   
  │       └── hero-truck.jpg                                                │                                                                       
  ├── src/                                                                  │   ├── app/                          ← Pages (Next.js App Router)
  │   │   ├── about/                                                      
  │   │   │   ├── AboutContent.tsx      ← client component                  │   │   │   └── page.tsx              ← server wrapper (metadata)
  │   │   ├── blog/                                                         │   │   │   ├── BlogContent.tsx                                         
  │   │   │   └── page.tsx                                                  │   │   ├── contact/                                                    
  │   │   │   ├── ContactContent.tsx                                      
  │   │   │   └── page.tsx                                                
  │   │   ├── privacy/
  │   │   │   └── page.tsx
  │   │   ├── services/                                                     │   │   │   ├── ServicesContent.tsx
  │   │   │   └── page.tsx                                                
  │   │   ├── terms/                                                      
  │   │   │   └── page.tsx                                                  │   │   ├── fonts/
  │   │   ├── favicon.ico                                                 
  │   │   ├── globals.css                                                 
  │   │   ├── layout.tsx                ← root layout (Navbar + Footer)
  │   │   └── page.tsx                  ← Home page                       
  │   │                                                                     │   ├── components/                                                     
  │   │   ├── layout/                                                     
  │   │   │   ├── Navbar.tsx
  │   │   │   └── Footer.tsx
  │   │   ├── sections/                 ← Homepage sections                 │   │   │   ├── Hero.tsx
  │   │   │   ├── SocialProofBar.tsx                                      
  │   │   │   ├── FeatureCards.tsx                                        
  │   │   │   ├── TrustSection.tsx                                          │   │   │   ├── Testimonials.tsx
  │   │   │   ├── FaqAccordion.tsx                                        
  │   │   │   └── CtaBanner.tsx                                             │   │   └── ui/                       ← Reusable primitives
  │   │       ├── Button.tsx                                              
  │   │       ├── Badge.tsx                                                 │   │       └── SectionLabel.tsx
  │   │                                                                   
  │   ├── hooks/                        ← (empty, for future custom hooks)  │   ├── lib/                                                              │   │   └── utils.ts
  │   └── types/                        ← (empty, for future types)         │                                                                       
  ├── next.config.mjs                                                     
  ├── tailwind.config.ts                                                  
  ├── tsconfig.json
  └── package.json      