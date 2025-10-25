"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, BookOpen, Camera, Castle, Crown, HelpCircle, Heart, Laptop, MapPin, Star, TreePine } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Culture", id: "culture" },
            { name: "Visit", id: "visit" },
            { name: "History", id: "history" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Estonia"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Discover Estonia"
          description="Experience the perfect blend of medieval charm and digital innovation in the heart of the Baltics"
          tag="Northern Europe"
          tagIcon={MapPin}
          buttons={[
            { text: "Plan Your Visit", href: "visit" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Tallinn Old Town medieval towers and cobblestone streets"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Estonia"
          description="A progressive Baltic nation where medieval heritage meets cutting-edge technology"
          tag="Modern Heritage"
          tagIcon={Crown}
          bulletPoints={[
            {
              title: "Digital Pioneer",
              description: "World's first digital society with e-Residency program",
              icon: Laptop
            },
            {
              title: "UNESCO Heritage",
              description: "Tallinn Old Town preserved medieval architecture",
              icon: Castle
            },
            {
              title: "Natural Beauty",
              description: "Pristine forests, islands, and coastal landscapes",
              icon: TreePine
            }
          ]}
          imageSrc="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern Estonia showcasing digital innovation"
          imagePosition="right"
        />
      </div>

      <div id="culture" data-section="culture">
        <FeatureCardThree
          title="Estonian Culture"
          description="Rich traditions and vibrant cultural expressions that define Estonian identity"
          tag="Traditions"
          tagIcon={Heart}
          features={[
            {
              id: "01",
              title: "Folk Heritage",
              description: "Traditional songs, dances, and crafts passed down through generations",
              imageSrc: "https://images.pexels.com/photos/18263934/pexels-photo-18263934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Estonian folk dancers in traditional costumes"
            },
            {
              id: "02",
              title: "Song Festivals",
              description: "Massive choir gatherings celebrating Estonian musical heritage",
              imageSrc: "https://images.pexels.com/photos/32920940/pexels-photo-32920940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Estonian song festival with thousands of singers"
            },
            {
              id: "03",
              title: "Midsummer Celebrations",
              description: "Magical white nights filled with bonfires and ancient traditions",
              imageSrc: "https://images.pexels.com/photos/213207/pexels-photo-213207.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Estonian midsummer bonfire celebration"
            }
          ]}
        />
      </div>

      <div id="visit" data-section="visit">
        <ProductCardOne
          title="Top Destinations"
          description="Explore Estonia's most captivating locations and attractions"
          tag="Must See"
          tagIcon={Camera}
          products={[
            {
              id: "tallinn",
              name: "Tallinn Old Town",
              price: "Free Entry",
              imageSrc: "https://images.pexels.com/photos/14337154/pexels-photo-14337154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tallinn Old Town cobblestone streets and medieval buildings"
            },
            {
              id: "lahemaa",
              name: "Lahemaa National Park",
              price: "Free Entry",
              imageSrc: "https://images.pexels.com/photos/961730/pexels-photo-961730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lahemaa National Park pristine forest and nature trails"
            },
            {
              id: "parnu",
              name: "Pärnu Beach Resort",
              price: "Free Access",
              imageSrc: "https://images.pexels.com/photos/13217740/pexels-photo-13217740.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Pärnu beach with golden sand and Baltic Sea"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Visitor Experiences"
          description="What travelers say about their Estonian adventures"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Travel Blogger",
              company: "Wanderlust Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3760257/pexels-photo-3760257.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Digital Nomad",
              company: "Tech Entrepreneur",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3839219/pexels-photo-3839219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "History Teacher",
              company: "European Tours",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34420222/pexels-photo-34420222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Family Traveler",
              company: "Adventure Families",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1914982/pexels-photo-1914982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim with family"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Recognized Worldwide"
          description="Estonia is celebrated by international organizations and travel authorities"
          tag="Awards"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/16744357/pexels-photo-16744357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1656225/pexels-photo-1656225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/33036094/pexels-photo-33036094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/15434151/pexels-photo-15434151.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/19924690/pexels-photo-19924690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/728501/pexels-photo-728501.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1656225/pexels-photo-1656225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Planning Your Visit"
          description="Common questions about traveling to Estonia"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Do I need a visa to visit Estonia?",
              content: "EU citizens can enter with ID card. Schengen visa holders can visit. US, Canadian, and many other citizens can visit visa-free for up to 90 days."
            },
            {
              id: "2",
              title: "What's the best time to visit Estonia?",
              content: "Summer (June-August) offers warm weather and white nights. Spring and fall have mild weather and fewer crowds. Winter brings snow sports and Christmas markets."
            },
            {
              id: "3",
              title: "What currency does Estonia use?",
              content: "Estonia uses the Euro (EUR) since 2011. Credit cards are widely accepted, and ATMs are readily available throughout the country."
            },
            {
              id: "4",
              title: "How do I get around Estonia?",
              content: "Public transport is excellent in cities. Buses connect major towns. Car rentals are popular for exploring the countryside and islands."
            }
          ]}
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Discover Estonia"
          description="Stories and insights about Estonian life and culture"
          tag="Stories"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Innovation",
              title: "Estonia's Digital Revolution",
              excerpt: "How a small Baltic nation became the world's most digitally advanced society",
              imageSrc: "https://images.pexels.com/photos/3783512/pexels-photo-3783512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Estonian e-Residency digital innovation",
              authorName: "Kersti Müller",
              authorAvatar: "https://images.pexels.com/photos/6466482/pexels-photo-6466482.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Culture",
              title: "The Estonian Sauna Tradition",
              excerpt: "Exploring the spiritual and cultural significance of sauna in Estonian life",
              imageSrc: "https://images.pexels.com/photos/9551036/pexels-photo-9551036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional Estonian wooden sauna",
              authorName: "Kersti Müller",
              authorAvatar: "https://images.pexels.com/photos/6466482/pexels-photo-6466482.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              date: "12 Jan 2025"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions about visiting Estonia? We're here to help plan your perfect Baltic adventure."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your travel plans or questions about Estonia...",
            rows: 5,
            required: true
          }}
          imageSrc="https://images.pexels.com/photos/10880680/pexels-photo-10880680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Estonian government buildings on Toompea Hill"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Explore",
              items: [
                { label: "About Estonia", href: "about" },
                { label: "Culture & Heritage", href: "culture" },
                { label: "Visit Estonia", href: "visit" },
                { label: "History", href: "history" }
              ]
            },
            {
              title: "Travel",
              items: [
                { label: "Destinations", href: "visit" },
                { label: "Planning Guide", href: "faq" },
                { label: "Travel Blog", href: "blog" },
                { label: "Contact Us", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Visit Estonia Official", href: "https://visitestonia.com" },
                { label: "e-Residency", href: "https://e-residency.gov.ee" },
                { label: "Estonian Culture", href: "https://kultuur.ee" }
              ]
            }
          ]}
          copyrightText="© 2025 | Estonia Tourism Guide"
        />
      </div>
    </ThemeProvider>
  );
}