
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, BookOpen, Brain, Atom } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Physics Expertise",
      icon: Atom,
      skills: [
        { name: "Atomic and Molecular Physics", level: 90 },
        { name: "Plasma Physics and Applications", level: 85 },
        { name: "Quantum Mechanics", level: 90 },
        { name: "Condensed Matter Physics", level: 85 },
        { name: "Electromagnetic Theory", level: 88 },
        { name: "Statistical Physics", level: 82 }
      ]
    },
    {
      title: "Programming & Tools",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "MATLAB", level: 88 },
        { name: "C/C++", level: 80 },
        { name: "LaTeX", level: 85 },
        { name: "FORTRAN", level: 70 },
        { name: "Git/GitHub", level: 85 }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: [
        { name: "Deep Learning (CNN, Transformers)", level: 85 },
        { name: "Machine Learning Algorithms", level: 88 },
        { name: "Data Analysis & Visualization", level: 90 },
        { name: "Neural Networks", level: 82 },
        { name: "Computer Vision", level: 75 },
        { name: "Statistical Learning", level: 80 }
      ]
    },
    {
      title: "Research & Academic",
      icon: BookOpen,
      skills: [
        { name: "Scientific Writing", level: 88 },
        { name: "Research Methodology", level: 90 },
        { name: "Data Mining", level: 85 },
        { name: "Literature Review", level: 85 },
        { name: "Academic Presentation", level: 85 },
        { name: "Peer Review", level: 80 }
      ]
    }
  ];

  // Additional technical skills from CV
  const technicalSkills = [
    // Physics specific
    "Radiation Detection and Measurement", "Quantum Theory of Solids", "Nanotechnology",
    "Electromagnetic Theory", "Lasers and Photonics", "Applied Optics", "Thermal and Statistical Mechanics",
    "Mechanics and Relativity",
    
    // Electrical Engineering
    "Network Theory", "Analog Electronics", "Digital Electronics", "Signals and Systems", 
    "Microprocessors and Computer", "Semiconductor Devices", "Applied Communication",
    
    // Mathematics & Computation
    "Linear Algebra", "Differential Equations", "Multivariable Calculus", "Optimization Techniques",
    "Mathematical Physics", "Data Mining", "Engineering Analysis and Design", "Numerical Analysis",
    
    // Computer Science & Programming
    "Introduction to Programming (C/C++)", "Data Structure and Algorithms", "Computer organization and architecture",
    "Statistical learning", "Artificial Intelligence", "TensorFlow", "PyTorch", "SQL", "JavaScript", "MongoDB"
  ];

  const languages = [
    { name: "English", level: "TOEFL" },
    { name: "Hindi", level: "Native" }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return "bg-electric-blue";
    if (level >= 75) return "bg-green-500";
    if (level >= 65) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <section id="skills" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </div>

        {/* Core Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-dark-700 border-dark-600 hover:border-electric-blue/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <category.icon className="h-6 w-6 mr-3 text-electric-blue" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="w-full bg-dark-600 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-dark-700 border-dark-600">
            <CardHeader>
              <CardTitle className="text-xl text-white">Technical Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-dark-900 transition-colors text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-dark-700 border-dark-600">
            <CardHeader>
              <CardTitle className="text-xl text-white">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{lang.name}</span>
                    <Badge variant="outline" className="border-electric-blue text-electric-blue">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { Skills };
