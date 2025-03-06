
import React, { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  name, 
  value, 
  onChange, 
  placeholder, 
  type = 'text', 
  multiline = false,
  required = false
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      {multiline ? (
        <Textarea
          id={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full min-h-[100px]"
        />
      ) : (
        <Input
          id={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full"
        />
      )}
    </div>
  );
};

const InputForm = () => {
  const { state, dispatch } = usePortfolio();
  const { toast } = useToast();
  const [formData, setFormData] = useState(() => {
    // Initialize with current portfolio data
    return { ...state.portfolio };
  });

  const handlePersonalDataChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value
      }
    }));
  };

  const handleSaveChanges = () => {
    // Update portfolio data in context
    dispatch({ 
      type: 'LOAD_PORTFOLIO', 
      portfolio: formData 
    });
    
    // Close modal
    dispatch({ 
      type: 'TOGGLE_MODAL', 
      isOpen: false 
    });
    
    toast({
      title: "Changes Saved",
      description: "Your portfolio has been updated successfully.",
    });
  };

  const handleCloseModal = () => {
    // Reset form data to current portfolio
    setFormData({ ...state.portfolio });
    
    // Close modal
    dispatch({ 
      type: 'TOGGLE_MODAL', 
      isOpen: false 
    });
  };

  const formSections = {
    personal: {
      title: "Personal Information",
      description: "Basic information about you that will appear in your portfolio."
    },
    experience: {
      title: "Work Experience",
      description: "Your professional experience and achievements."
    },
    education: {
      title: "Education",
      description: "Your academic background and qualifications."
    },
    skills: {
      title: "Skills",
      description: "Technical and professional skills that you possess."
    },
    projects: {
      title: "Projects",
      description: "Showcase your best work and notable projects."
    },
    testimonials: {
      title: "Testimonials",
      description: "What others say about your work and professionalism."
    },
    social: {
      title: "Social Links",
      description: "Your professional social media profiles and links."
    }
  };

  const currentSection = state.currentSection as keyof typeof formSections;
  
  return (
    <Dialog open={state.isModalOpen} onOpenChange={handleCloseModal}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden max-h-[90vh]">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-xl font-display">
            {currentSection ? formSections[currentSection]?.title : "Edit Portfolio"}
          </DialogTitle>
          <DialogDescription>
            {currentSection ? formSections[currentSection]?.description : "Enter your information to build your portfolio."}
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] px-6 py-4">
          <div className="space-y-6">
            {currentSection === 'personal' && (
              <div className="space-y-4">
                <InputField
                  label="Full Name"
                  name="fullName"
                  value={formData.personal.fullName}
                  onChange={(value) => handlePersonalDataChange('fullName', value)}
                  placeholder="e.g., John Doe"
                  required
                />
                <InputField
                  label="Professional Title"
                  name="title"
                  value={formData.personal.title}
                  onChange={(value) => handlePersonalDataChange('title', value)}
                  placeholder="e.g., UI/UX Designer"
                  required
                />
                <InputField
                  label="Bio"
                  name="bio"
                  value={formData.personal.bio}
                  onChange={(value) => handlePersonalDataChange('bio', value)}
                  placeholder="Write a short professional bio..."
                  multiline
                  required
                />
                <InputField
                  label="Email"
                  name="email"
                  value={formData.personal.email}
                  onChange={(value) => handlePersonalDataChange('email', value)}
                  placeholder="your.email@example.com"
                  type="email"
                />
                <InputField
                  label="Phone"
                  name="phone"
                  value={formData.personal.phone}
                  onChange={(value) => handlePersonalDataChange('phone', value)}
                  placeholder="+1 (123) 456-7890"
                />
                <InputField
                  label="Location"
                  name="location"
                  value={formData.personal.location}
                  onChange={(value) => handlePersonalDataChange('location', value)}
                  placeholder="City, Country"
                />
              </div>
            )}
            
            {/* For brevity, other sections (experience, education, etc.) would be implemented similarly */}
            {currentSection !== 'personal' && (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">
                  This section will be implemented in the next phase.
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
        
        <DialogFooter className="px-6 py-4 bg-secondary/30">
          <Button variant="outline" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InputForm;
