
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Preview = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="bg-primary p-4 text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <h1 className="font-display font-bold">Portfolio Preview</h1>
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Portfolio Content */}
      <div className="bg-white text-black">
        {/* Hero Section */}
        <div className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center">
          <div className="container mx-auto px-8">
            <span className="inline-block mb-2 text-sm font-medium tracking-wider text-blue-600 uppercase">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
              Jane Smith
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              UI/UX Designer & Web Developer
            </p>
            <p className="max-w-2xl text-gray-600">
              I create beautiful, functional, and user-centered digital experiences. 
              With a focus on user interface design and web development, I strive to 
              create innovative solutions that inspire and delight.
            </p>
          </div>
        </div>
        
        {/* About & Experience Section */}
        <div className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* About */}
            <div>
              <h2 className="text-2xl font-bold mb-6">About</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-medium w-24">Email:</span>
                  <span>jane.smith@example.com</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Phone:</span>
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium w-24">Location:</span>
                  <span>San Francisco, CA</span>
                </li>
                <li className="mt-6">
                  <p className="text-gray-700">
                    I've been designing and developing web experiences for over 
                    5 years. My expertise includes UI/UX design, responsive web 
                    development, and creating accessible digital products.
                  </p>
                </li>
              </ul>
            </div>
            
            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Senior UI Designer</h3>
                  <p className="text-gray-600">DesignHub Inc.</p>
                  <p className="text-sm text-gray-500 mb-2">
                    Jan 2021 - Present
                  </p>
                  <p className="text-gray-700">
                    Lead the design team in creating user interfaces for web and 
                    mobile applications. Established design systems and 
                    collaborated with development teams to ensure high-quality implementation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Web Developer</h3>
                  <p className="text-gray-600">TechSolutions LLC</p>
                  <p className="text-sm text-gray-500 mb-2">
                    Mar 2019 - Dec 2020
                  </p>
                  <p className="text-gray-700">
                    Developed responsive websites and web applications using 
                    modern frameworks. Worked closely with designers to transform 
                    creative concepts into functional products.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["UI/UX Design", "Figma", "Adobe XD", "HTML", "CSS", "JavaScript", 
                "React", "Tailwind CSS", "TypeScript", "Responsive Design", 
                "Accessibility", "User Research"].map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Projects Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "E-commerce Redesign",
                  description: "Complete redesign of an e-commerce platform focusing on improving the user experience and conversion rates.",
                  tags: ["UI/UX", "Figma", "E-commerce"]
                },
                {
                  title: "Health & Fitness App",
                  description: "Designed and developed a mobile app for tracking fitness goals and maintaining healthy habits.",
                  tags: ["React Native", "UI Design", "Health"]
                },
                {
                  title: "Corporate Website",
                  description: "Designed and developed a responsive website for a corporate client with a focus on brand identity.",
                  tags: ["Web Design", "Development", "Corporate"]
                }
              ].map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400">
                    Project Image
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-gray-100 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Get In Touch</h2>
            <div className="max-w-md mx-auto">
              <p className="text-center text-gray-600 mb-8">
                Interested in working together? Feel free to contact me for any project or collaboration.
              </p>
              <Button className="w-full">Contact Me</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-8 text-center">
          <p>© 2023 Jane Smith. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
