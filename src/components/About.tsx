
import { Card, CardContent } from '@/components/ui/card';
import { Atom, Brain, Lightbulb } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: Atom,
      title: "Condensed Matter Physics",
      description: "Theoretical and computational studies of quantum many-body systems, superconductors, and plasma physics"
    },
    {
      icon: Brain,
      title: "Computational Modeling",
      description: "Advanced simulations using MATLAB, Python, and numerical methods for complex physics problems"
    },
    {
      icon: Lightbulb,
      title: "Machine Learning & AI",
      description: "AI applications in physics research, quantum mechanics simulations, and data analysis"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              PhD Student in Condensed Matter Physics
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am currently pursuing my PhD in Physics at the University of Florida, specializing in 
              theoretical and computational condensed matter physics. My research focuses on understanding 
              quantum many-body systems, superconductor physics, and developing advanced computational 
              techniques for studying complex materials.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I completed my B.Tech in Engineering Physics with a minor in Data Science and AI from the 
              prestigious Indian Institute of Technology, Roorkee. This 
              interdisciplinary background allows me to approach physics problems with both theoretical 
              rigor and modern computational tools, including machine learning and artificial intelligence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My research interests span atomic physics, plasma physics, quantum mechanics, computational 
              modeling, and AI applications in physics. I have experience with electron impact excitation 
              calculations, machine learning approaches for spinodal events classification, and numerical 
              methods for superconductor modeling.
            </p>
          </div>

          <div className="space-y-6">
            {interests.map((interest, index) => (
              <Card key={index} className="bg-dark-700 border-dark-600 hover:border-electric-blue/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-electric-blue/10 rounded-lg">
                      <interest.icon className="h-6 w-6 text-electric-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{interest.title}</h4>
                      <p className="text-gray-400 text-sm">{interest.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
