
import React, { useEffect, useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Pencil, Eye, Download, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Modern template component
const ModernTemplate = ({ portfolio }: { portfolio: any }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center">
        <div className="container mx-auto px-8">
          <span className="inline-block mb-2 text-sm font-medium tracking-wider text-blue-600 uppercase">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
            {portfolio.personal.fullName}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {portfolio.personal.title}
          </p>
          <p className="max-w-2xl text-gray-600">
            {portfolio.personal.bio}
          </p>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold mb-6">About</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium w-24">Email:</span>
                <span>{portfolio.personal.email}</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Phone:</span>
                <span>{portfolio.personal.phone}</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Location:</span>
                <span>{portfolio.personal.location}</span>
              </li>
            </ul>
          </div>
          
          {/* Experience Preview */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            {portfolio.experience.length > 0 ? (
              <div className="space-y-6">
                {portfolio.experience.slice(0, 1).map((exp: any) => (
                  <div key={exp.id}>
                    <h3 className="font-semibold text-lg">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
                {portfolio.experience.length > 1 && (
                  <p className="text-blue-600 text-sm">+ {portfolio.experience.length - 1} more experiences</p>
                )}
              </div>
            ) : (
              <p className="text-gray-500 italic">No experience added yet</p>
            )}
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {portfolio.skills.map((skill: any) => (
              <span 
                key={skill.id}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* Projects Preview */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          {portfolio.projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.projects.map((project: any) => (
                <Card key={project.id} className="overflow-hidden border border-gray-200">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400">
                    Project Image
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tags.slice(0, 3).map((tag: string, index: number) => (
                        <span key={index} className="px-2 py-0.5 bg-gray-100 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No projects added yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Minimal template component
const MinimalTemplate = ({ portfolio }: { portfolio: any }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white text-black">
      {/* Minimal Header */}
      <header className="py-16 px-8 text-center">
        <h1 className="font-display text-4xl font-bold mb-2">
          {portfolio.personal.fullName}
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          {portfolio.personal.title}
        </p>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            {portfolio.personal.bio}
          </p>
        </div>
      </header>
      
      {/* Minimal Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-8 py-12 space-y-16">
        {/* About Section */}
        <section className="border-t pt-12">
          <h2 className="font-display text-2xl mb-8 text-center">About</h2>
          <div className="flex flex-col items-center space-y-4 text-center">
            <p><span className="font-medium">Email:</span> {portfolio.personal.email}</p>
            <p><span className="font-medium">Phone:</span> {portfolio.personal.phone}</p>
            <p><span className="font-medium">Location:</span> {portfolio.personal.location}</p>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="border-t pt-12">
          <h2 className="font-display text-2xl mb-8 text-center">Experience</h2>
          {portfolio.experience.length > 0 ? (
            <div className="space-y-8">
              {portfolio.experience.slice(0, 2).map((exp: any) => (
                <div key={exp.id} className="text-center">
                  <h3 className="font-medium text-xl">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </p>
                  <p className="text-gray-700 max-w-xl mx-auto">{exp.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic text-center">No experience added yet</p>
          )}
        </section>
        
        {/* Skills Section */}
        <section className="border-t pt-12">
          <h2 className="font-display text-2xl mb-8 text-center">Skills</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {portfolio.skills.map((skill: any) => (
              <span 
                key={skill.id}
                className="px-4 py-2 border rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

const PortfolioPreview = () => {
  const { state, dispatch } = usePortfolio();
  const { toast } = useToast();
  const [activeView, setActiveView] = useState('desktop');
  
  const selectedTemplate = state.selectedTemplateId?.split('-')[0] || 'modern';
  
  const handleEditSection = (section: string) => {
    dispatch({ 
      type: 'TOGGLE_MODAL', 
      isOpen: true,
      section
    });
  };
  
  const handleExport = () => {
    toast({
      title: "Export Feature",
      description: "The export feature will be available in the next version.",
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Share Feature",
      description: "The share feature will be available in the next version.",
    });
  };
  
  // Render the selected template
  const renderSelectedTemplate = () => {
    switch(selectedTemplate) {
      case 'minimal':
        return <MinimalTemplate portfolio={state.portfolio} />;
      case 'modern':
      default:
        return <ModernTemplate portfolio={state.portfolio} />;
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-6">
        <div>
          <h2 className="text-2xl font-semibold font-display tracking-tight">Portfolio Preview</h2>
          <p className="text-muted-foreground">
            This is how your portfolio will look based on your information and selected template.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={handleExport}>
            <Download className="w-4 h-4 mr-1" />
            Export
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-1" />
            Share
          </Button>
        </div>
      </div>
      
      <div className="flex items-center justify-between px-6">
        <Tabs 
          defaultValue="desktop" 
          value={activeView}
          onValueChange={setActiveView}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="desktop">Desktop</TabsTrigger>
              <TabsTrigger value="tablet">Tablet</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            
            <div className="hidden sm:block">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleEditSection('personal')}
                className="mr-2"
              >
                <Pencil className="w-4 h-4 mr-1" />
                Edit Content
              </Button>
            </div>
          </div>
          
          <TabsContent value="desktop" className="mt-4">
            <div className="border rounded-lg overflow-hidden bg-background h-[600px]">
              <div className="w-full h-full overflow-auto">
                {renderSelectedTemplate()}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tablet" className="mt-4">
            <div className="border rounded-lg overflow-hidden bg-background mx-auto h-[600px]" style={{ maxWidth: '768px' }}>
              <div className="w-full h-full overflow-auto">
                {renderSelectedTemplate()}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="mobile" className="mt-4">
            <div className="border rounded-lg overflow-hidden bg-background mx-auto h-[600px]" style={{ maxWidth: '390px' }}>
              <div className="w-full h-full overflow-auto">
                {renderSelectedTemplate()}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="px-6 sm:hidden">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => handleEditSection('personal')}
          className="w-full"
        >
          <Pencil className="w-4 h-4 mr-1" />
          Edit Content
        </Button>
      </div>
    </div>
  );
};

export default PortfolioPreview;
