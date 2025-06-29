import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Teaching Assistant",
      organization: "IIT Roorkee",
      course: "PHE-101: Quantum Mechanics and Electromagnetic Theory",
      duration: "Current",
      location: "Roorkee, India",
      type: "Academic",
      description: "Assisted in delivering undergraduate-level quantum mechanics and electromagnetic theory course.",
      responsibilities: [
        "Led tutorial sessions and problem-solving classes.",
        "Provided academic support and one-on-one mentoring.",
        "Graded assignments and assisted in evaluations.",
        "Helped students grasp complex physics concepts."
      ],
      skills: ["Teaching", "Quantum Mechanics", "Electromagnetic Theory", "Student Mentoring"]
    }
  ];

  const otherProjects = [
    {
      title: "Majorana Modes in the Kitaev Chain",
      organization: "Course Project, IIT Roorkee",
      duration: "Oct 2023",
      description: "Explored theoretical evidence of Majorana zero modes at the boundaries of a 1D Kitaev chain.",
      tools: ["Theoretical Physics", "Quantum Mechanics", "Condensed Matter"]
    },
    {
      title: "Comparison of Activation Functions for Image Classification",
      organization: "Course Project, IIT Roorkee",
      duration: "Jun 2024",
      description: "Benchmarked ReLU, SELU, GELU, ELU, and SoftPlus for image classification tasks.",
      tools: ["Python", "Machine Learning", "Image Processing", "Neural Networks"]
    },
    {
      title: "Reflectance Through Multidimensional Slab",
      organization: "Course Project, IIT Roorkee",
      duration: "Jul 2022",
      description: "Calculated light reflectance through a multidimensional slab using MATLAB and matrix methods.",
      tools: ["MATLAB", "Optics", "Numerical Methods", "Physics Simulation"]
    },
    {
      title: "Random Quantum Walks",
      organization: "Physics and Astronomy Club, IIT Roorkee",
      duration: "Dec 2023 – Jan 2024",
      description: "Simulated classical and quantum random walks using Grover’s algorithm in multiple dimensions.",
      tools: ["Python", "Quantum Computing", "Algorithms", "Statistical Physics"]
    },
    {
      title: "Polygon Collider Visualizer",
      organization: "Association of Computing Machinery, IIT Roorkee",
      duration: "Jul 2022",
      description: "Created a polygon collision visualizer using the GJK algorithm and Three.js.",
      tools: ["JavaScript", "Three.js", "Computer Graphics", "Algorithm Implementation"]
    },
    {
      title: "Byteshell",
      organization: "Association of Computing Machinery, IIT Roorkee",
      duration: "Jul 2022",
      description: "Developed a C/C++-based command-line shell with built-in commands and custom error handling.",
      tools: ["C/C++", "System Programming", "Shell Development", "Data Structures"]
    },
    {
      title: "Hashing Implementation",
      organization: "Association of Computing Machinery, IIT Roorkee",
      duration: "Jul 2022",
      description: "Implemented HashMap using both linked lists and AVL trees; analyzed time-space tradeoffs.",
      tools: ["Data Structures", "Algorithms", "C++", "Performance Analysis"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research": return "bg-electric-blue";
      case "Academic": return "bg-green-600";
      case "Research Internship": return "bg-crimson-red";
      case "Leadership": return "bg-purple-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </div>

        {/* Main Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-dark-800 border-dark-700 hover:border-electric-blue/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white mb-2">{exp.title}</CardTitle>
                      <p className="text-electric-blue font-semibold mb-2">{exp.organization}</p>
                      {exp.course && (
                        <p className="text-gray-400 text-sm mb-2">{exp.course}</p>
                      )}
                      <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <Badge className={`mb-2 text-white ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </Badge>
                      <div className="flex items-center md:justify-end text-gray-400 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center md:justify-end text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start">
                            <span className="w-2 h-2 bg-electric-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-gray-600 text-gray-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">Academic Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="bg-dark-800 border-dark-700 hover:border-electric-blue/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-white mb-2">{project.title}</CardTitle>
                  <p className="text-electric-blue text-sm">{project.organization}</p>
                  <p className="text-gray-400 text-sm">{project.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-dark-600 text-gray-300">
                        {tool}
                      </Badge>
                    ))}
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

export { Experience };
