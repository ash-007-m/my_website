
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Download, Mail, Github, Linkedin, Menu, X, ExternalLink, Calendar, MapPin, Award, BookOpen, Code, Atom, Brain, Lightbulb } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Research } from '@/components/Research';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="bg-dark-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Research />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Index;
