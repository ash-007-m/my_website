import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center particle-bg relative">
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue rounded-full animate-particle opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 animate-fade-in">

          {/* Left: Text Section */}
          <div className="text-center md:text-left md:w-2/3">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Ashwini</span>{' '}
              <span className="text-electric-blue glow-text">Malviya</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              PhD Student • Condensed Matter Physics • University of Florida
            </p>

            <p className="text-gray-400 mb-12 max-w-3xl">
              Exploring theoretical and computational condensed matter physics with a focus on 
              quantum phenomena and materials science. Passionate about bridging theoretical 
              concepts with computational modeling and data-driven approaches.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-electric-blue hover:bg-electric-blue/80 text-dark-900 font-semibold px-8 py-3 glow-box hover:animate-glow transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToContact}
                className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-900 font-semibold px-8 py-3 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right: Larger Profile Image */}
         {/* Right: Profile Image - Pleasantly Sized */}
<div className="md:w-1/3 flex justify-center">
          <img
  src={`${import.meta.env.BASE_URL}images/ashwin.jpg`}
  alt="Ashwini Malviya"
  className="w-60 h-60 object-cover rounded-full border-2 border-electric-blue shadow-lg"
/>

</div>

        </div>
      </div>
    </section>
  );
};

export { Hero };
