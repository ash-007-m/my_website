import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
const education = [
  {
    institution: "Indian Institute of Technology, Roorkee",
    degree: "Bachelor of Technology in Engineering Physics (Minor in Data Science & AI)",
    duration: "2021 – 2025",
    location: "Roorkee, Uttarakhand",
    highlights: [
      "Appointed as Teaching Assistant for PHI-101 (core undergraduate physics course)",
      "Received institutional recognition for academic and research contributions"
    ],
    achievements: [
      "Supported classroom learning as Teaching Assistant for Quantum Mechanics and Electromagnetic Theory",
      "Awarded letters of appreciation by both the HOD and Dean for academic excellence",
      "Selected for MMVY Scholarship by Government of India for merit-based performance",
      "Involved in advanced interdisciplinary research at the intersection of Physics and AI"
    ],
    coursework: [
      "Quantum Mechanics",
      "Condensed Matter Physics",
      "Plasma Physics",
      "Atomic & Molecular Physics",
      "Machine Learning",
      "Data Science & AI"
    ]
  },
  {
    institution: "Samartans English Medium Higher Secondary School",
    degree: "Higher Secondary Education",
    duration: "Up to 2020",
    location: "Narmadapuram, Madhya Pradesh",
    highlights: [
      "Maintained consistent academic excellence in science subjects",
      "Excelled in analytical domains including Physics and Mathematics"
    ],
    achievements: [
      "Achieved top performance throughout high school in core STEM subjects",
      "Built a solid academic foundation in Physics, Math, and Computer Science",
      "Demonstrated strong problem-solving and critical thinking abilities early on"
    ],
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science"
    ]
  }
];



  const references = [
    {
      name: "Dr. Lalita Sharma",
      title: "Professor, Department of Physics, IIT Roorkee, India",
      email: "lalita.sharma@ph.iitr.ac.in"
    },
    {
      name: "Dr. Jitin Singla",
      title: "Professor, Department of Bioscience and Bioengineering, IIT Roorkee, India",
      email: "jsingla@bt.iitr.ac.in"
    },
    {
      name: "Dr. Piyush Kumar Choubey",
      title: "Professor, Department of Physics, IIT Roorkee, India",
      email: "piyush@ph.iitr.ac.in"
    },
    {
      name: "Dr. Sparsh Mittal",
      title: "Professor, Department of Electronics and Communication Engineering, IIT Roorkee, India",
      email: "sparsh.mittal@ece.iitr.ac.in"
    }
  ];

  return (
    <section id="education" className="py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="bg-dark-800 border-dark-700 hover:border-electric-blue/50 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-white mb-2">{edu.institution}</CardTitle>
                    <p className="text-electric-blue font-semibold">{edu.degree}</p>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="flex items-center justify-end text-gray-400 mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center justify-end text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">

                  {/* Highlights Section */}
               {/* Highlights Section */}
<div>
  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
    <Award className="h-5 w-5 mr-2 text-electric-blue" />
    Highlights
  </h4>
  <ul className="space-y-2">
    {edu.highlights.map((highlight, idx) => (
      <li key={idx} className="text-gray-400 text-sm flex items-start">
        <span className="w-2 h-2 bg-electric-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
        {highlight}
      </li>
    ))}
  </ul>
</div>


                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start">
                          <span className="w-2 h-2 bg-electric-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Coursework */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-gray-600 text-gray-300">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* References */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">References</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {references.map((ref, index) => (
              <Card key={index} className="bg-dark-800 border-dark-700">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">{ref.name}</h4>
                  <p className="text-gray-300 text-sm mb-2">{ref.title}</p>
                  <p className="text-electric-blue text-sm">{ref.email}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Education };
