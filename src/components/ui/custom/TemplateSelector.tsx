
import React, { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { templates, Template } from '@/utils/templates';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const TemplateSelector = () => {
  const { state, dispatch } = usePortfolio();
  const { toast } = useToast();
  const [filter, setFilter] = useState<string>('all');

  const handleSelectTemplate = (template: Template) => {
    if (template.premium) {
      toast({
        title: "Premium Template",
        description: "This is a premium template. Please upgrade to use it.",
        variant: "destructive",
      });
      return;
    }
    
    dispatch({ type: 'SET_TEMPLATE', templateId: template.id });
    
    toast({
      title: "Template Selected",
      description: `You've selected the ${template.name} template.`,
    });
  };

  const filteredTemplates = filter === 'all' 
    ? templates 
    : templates.filter(template => template.type === filter);

  return (
    <div className="space-y-8 py-8">
      <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-display font-semibold tracking-tight">Choose Your Template</h2>
        <p className="text-muted-foreground">
          Select a template that matches your style and needs. Each template is fully customizable.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('all')}
            className="rounded-full"
          >
            All
          </Button>
          <Button 
            variant={filter === 'modern' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('modern')}
            className="rounded-full"
          >
            Modern
          </Button>
          <Button 
            variant={filter === 'minimal' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('minimal')}
            className="rounded-full"
          >
            Minimal
          </Button>
          <Button 
            variant={filter === 'creative' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('creative')}
            className="rounded-full"
          >
            Creative
          </Button>
          <Button 
            variant={filter === 'professional' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('professional')}
            className="rounded-full"
          >
            Professional
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {filteredTemplates.map((template) => (
          <Card 
            key={template.id}
            className={cn(
              "group overflow-hidden border transition-all hover:shadow-medium",
              state.selectedTemplateId === template.id && "ring-2 ring-primary"
            )}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-accent to-secondary">
              {/* This would be a template preview image */}
              <div className="absolute inset-0 flex items-center justify-center text-foreground/20 select-none font-display text-2xl">
                {template.name}
              </div>
              
              {/* Premium badge */}
              {template.premium && (
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 right-3 font-medium bg-background/70 backdrop-blur-sm"
                >
                  <Lock className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              )}
              
              {/* Selected indicator */}
              {state.selectedTemplateId === template.id && (
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                  <div className="bg-background rounded-full p-1">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{template.name}</h3>
                  <p className="text-sm text-muted-foreground">{template.type}</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2">{template.description}</p>
              
              <div className="pt-2">
                <Button 
                  variant={state.selectedTemplateId === template.id ? "default" : "outline"}
                  className="w-full"
                  onClick={() => handleSelectTemplate(template)}
                  disabled={template.premium}
                >
                  {state.selectedTemplateId === template.id 
                    ? "Selected" 
                    : template.premium 
                      ? "Premium" 
                      : "Select"}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
