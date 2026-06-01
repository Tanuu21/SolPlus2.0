import { Navbar }       from '@/components/landing/Navbar'
import { Hero }         from '@/components/landing/Hero'
import { Ticker }       from '@/components/landing/Ticker'
import { StatsBar }     from '@/components/landing/StatsBar'
import { Features }     from '@/components/landing/Features'
import { HowItWorks }  from '@/components/landing/HowItWorks'
import { LiveFeed }     from '@/components/landing/LiveFeed'
import { FAQ }          from '@/components/landing/FAQ'
import { CTASection }   from '@/components/landing/CTASection'
import { Footer }       from '@/components/landing/Footer'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Ticker />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Features />
        <HowItWorks />
        <LiveFeed />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
