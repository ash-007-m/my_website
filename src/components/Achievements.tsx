import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "MMVY Scholarship",
      description: "Awarded under the Government of India’s merit-based scholarship scheme.",
      category: "Scholarship",
      year: "Ongoing",
      icon: Star,
      significance: "National academic recognition"
    },
    {
      title: "Letter of Appreciation - Head of Department",
      description: "Received formal recognition for academic and research contributions.",
      category: "Academic",
      year: "2024",
      icon: Award,
      significance: "Departmental distinction"
    },
    {
      title: "Letter of Appreciation - Dean of Institute",
      description: "Honored for outstanding academic involvement and contributions.",
      category: "Academic", 
      year: "2024",
      icon: Trophy,
      significance: "Institute-wide honor"
    },
    {
      title: "Teaching Assistant - Quantum & EM Theory",
      description: "Assisted in teaching core physics courses for undergraduate students.",
      category: "Academic",
      year: "2024",
      icon: Medal,
      significance: "Leadership in academics"
    },
    {
      title: "Research Publications (2+)",
      description: "Published and submitted research in atomic physics and AI for physics.",
      category: "Research",
      year: "2024",
      icon: Award,
      significance: "Published author"
    },
    {
      title: "Research Experience (4+ Projects)",
      description: "Hands-on contributions in diverse research areas including quantum, plasma, and ML.",
      category: "Research",
      year: "2023–2024",
      icon: Trophy,
      significance: "Cross-disciplinary research"
    }
  ];

  const awards = [
    "Letter of appreciation from the Head of the Department of Physics",
    "Letter of appreciation from the Dean of the Institute",
    "MMVY Scholarship (Government of India)",
    "Teaching Assistant for PHI-101 (Quantum Mechanics and Electromagnetic Theory)"
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic": return "bg-electric-blue";
      case "Research": return "bg-green-600";
      case "Competition": return "bg-crimson-red";
      case "Scholarship": return "bg-yellow-600";
      case "Fellowship": return "bg-purple-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-dark-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements & Recognition</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-dark-800 border-dark-700 hover:border-electric-blue/50 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <achievement.icon className="h-8 w-8 text-electric-blue" />
                  <div className="text-right">
                    <Badge className={`text-white ${getCategoryColor(achievement.category)}`}>
                      {achievement.category}
                    </Badge>
                    <p className="text-gray-400 text-sm mt-1">{achievement.year}</p>
                  </div>
                </div>
                <CardTitle className="text-lg text-white leading-tight">
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mr-2"></div>
                  <span className="text-electric-blue text-sm font-medium">
                    {achievement.significance}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Awards and Experiences Summary */}
        <div className="mb-16">
          <Card className="bg-dark-800 border-dark-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white text-center">Awards and Experiences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">{award}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Removed CGPA/Marks Summary Block */}
      </div>
    </section>
  );
};

export { Achievements };

