import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    emailjs.init('y3RA7bAImvLsdG3q_'); // ✅ Your EmailJS public key
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        'service_cd0c3gn',         // ✅ Your service ID
        'template_dnob7iv',        // ✅ Your template ID
        formRef.current,
        'y3RA7bAImvLsdG3q_'        // ✅ Your public key
      );

      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. I’ll get back to you soon.',
      });

      setFormData({ from_name: '', reply_to: '', message: '' });

    } catch (error: any) {
      toast({
        title: 'Failed to send',
        description: 'Please try again later.',
        variant: 'destructive'
      });
      console.error('EmailJS Error:', error?.text || error);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'IIT Roorkee, Uttarakhand, India',
      link: 'https://maps.google.com/?q=IIT+Roorkee'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ashwini-malviya-b77a4322a/',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/ash-007-m',
      color: 'hover:text-gray-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing research opportunities, collaborations, or any interesting 
            physics problems. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-dark-700 border-dark-600">
            <CardHeader>
              <CardTitle className="text-xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="from_name"
                    name="from_name"
                    type="text"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    className="bg-dark-600 border-dark-500 text-black focus:border-electric-blue"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="reply_to"
                    name="reply_to"
                    type="email"
                    value={formData.reply_to}
                    onChange={handleInputChange}
                    className="bg-dark-600 border-dark-500 text-black focus:border-electric-blue"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-dark-600 border-dark-500 text-black focus:border-electric-blue h-32 resize-none"
                    placeholder="Write your message here..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-electric-blue hover:bg-electric-blue/80 text-dark-900 font-semibold py-3 glow-box hover:animate-glow transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-dark-700 border-dark-600">
              <CardHeader>
                <CardTitle className="text-xl text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-electric-blue/10 rounded-lg">
                      <info.icon className="h-6 w-6 text-electric-blue" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <a 
                        href={info.link}
                        className="text-white hover:text-electric-blue transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-dark-700 border-dark-600">
              <CardHeader>
                <CardTitle className="text-xl text-white">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-6">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-dark-600 rounded-lg text-gray-400 transition-all duration-300 hover:bg-dark-500 ${link.color} hover:transform hover:scale-110`}
                    >
                      <link.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Follow me on social media for updates on my research and academic journey.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-dark-700 border-dark-600">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Response</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I typically respond to emails within 24–48 hours. For urgent matters or 
                  research collaborations, feel free to mention it in your subject line.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-dark-700 text-center">
          <p className="text-gray-400">
            © 2024 Ashwini Malviya. Built with passion for physics and code.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Contact };
