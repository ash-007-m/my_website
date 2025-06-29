import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Research = () => {
  const projects = [
    {
      title: "Electron Impact Excitation Calculation and CR-modeling for Na-like ions",
      description: "Conducted detailed study on electron impact excitation for Na-like ions (isoelectronic with Na) of Kr, Ar, and Xe. Utilized Multiconfiguration Dirac-Hartree-Fock (MCDHF) and R-Matrix methods.",
      domain: "Atomic Physics",
      duration: "Jun 2024 - Aug 2024",
      supervisor: "Prof Lalita Sharma, IIT Roorkee",
      tools: ["MCDHF", "R-Matrix", "Python", "Atomic Physics Calculations"],
      highlights: [
        "Developed collisional radiative model for plasma",
        "Calculated atomic and collision parameters",
        "Analyzed line emission spectra and temperature variations"
      ],
      status: "Completed",
      links: {
        github: "#",
        paper: "#"
      }
    },
    {
      title: "Machine Learning Approaches for Classifying Spinodal Events",
      description: "Compared performance of state-of-the-art machine learning models for classification of spinodal events using quantum chromodynamics (QCD) data.",
      domain: "Computational Physics & ML",
      duration: "Jun 2024 - Aug 2024",
      supervisor: "Prof Sparsh Mittal, IIT Roorkee",
      tools: ["Python", "CNN", "Transformers", "MobileVit", "NAT", "EfficientNet"],
      highlights: [
        "Implemented deep learning models and transformers",
        "Used ensemble methods including AdaBoost and majority voting",
        "Achieved high accuracy with AUC and F1 score metrics"
      ],
      status: "Completed",
      links: {
        github: "#",
        paper: "#"
      }
    },
    {
      title: "Efficient Numerical Methods for Inhomogeneous Superconductor",
      description: "Developing efficient numerical methods for studying inhomogeneous superconductors using Chebyshev expansion and Green function techniques.",
      domain: "Condensed Matter Physics",
      duration: "July 2024 - Present",
      supervisor: "Prof Prayush Kumar Chaubey, IIT Roorkee",
      tools: ["MATLAB", "Numerical Methods", "Green Functions", "Chebyshev Expansion"],
      highlights: [
        "Working on broken translational variance problems",
        "Implementing momentum space transformations",
        "Developing approximation methods for superconductor junction properties"
      ],
      status: "Ongoing",
      links: {
        github: "#",
        paper: "#"
      }
    }
  ];

  const publications = [
    {
      title: "EIP Calculation and Collisional-Radiative Modeling for Na-like Kr, Xe, and Ar+",
      status: "Manuscript under preparation",
      authors: "Malviya, A., Ratli, S., Sharma, L."
    },
    {
      title: "Comparison of Machine Learning Approaches for Classifying Spinodal Events",
      status: "Preparing for submission, arXiv:2410.09756",
      authors: "Malviya, A., Mittal, S."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ongoing": return "bg-yellow-600";
      case "Completed": return "bg-green-600";
      case "Published": return "bg-electric-blue";
      default: return "bg-gray-600";
    }
  };

  return (
    <section id="research" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Research & Publications</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </div>

        {/* Research Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Current Research Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-dark-700 border-dark-600 hover:border-electric-blue/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-white mb-2">{project.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-electric-blue border-electric-blue">
                          {project.domain}
                        </Badge>
                        <Badge className={`text-white ${getStatusColor(project.status)}`}>
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">{project.duration}</p>
                      <p className="text-gray-500 text-xs">{project.supervisor}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-electric-blue rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tool, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-dark-600 text-gray-300">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-900">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-900">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Paper
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Publications & Preprints</h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index} className="bg-dark-700 border-dark-600">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">{pub.title}</h4>
                  <p className="text-gray-400 mb-2">{pub.authors}</p>
                  <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                    {pub.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Research };
