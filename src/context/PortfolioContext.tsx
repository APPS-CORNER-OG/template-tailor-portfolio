
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Portfolio, defaultPortfolio, Template, templates } from '../utils/templates';

// Define state and action types
type PortfolioState = {
  portfolio: Portfolio;
  selectedTemplateId: string | null;
  isModalOpen: boolean;
  currentSection: string | null;
  isDirty: boolean;
  savedPortfolios: { id: string, name: string, lastEdited: Date }[];
  isPreviewMode: boolean;
};

type PortfolioAction =
  | { type: 'SET_TEMPLATE'; templateId: string }
  | { type: 'UPDATE_PORTFOLIO_SECTION'; section: keyof Portfolio; data: any }
  | { type: 'UPDATE_PORTFOLIO_ITEM'; section: keyof Portfolio; itemId: string; data: any }
  | { type: 'ADD_PORTFOLIO_ITEM'; section: keyof Portfolio; item: any }
  | { type: 'REMOVE_PORTFOLIO_ITEM'; section: keyof Portfolio; itemId: string }
  | { type: 'RESET_PORTFOLIO' }
  | { type: 'LOAD_PORTFOLIO'; portfolio: Portfolio }
  | { type: 'TOGGLE_MODAL'; isOpen: boolean; section?: string | null }
  | { type: 'TOGGLE_PREVIEW_MODE'; isPreview: boolean };

// Create context
type PortfolioContextType = {
  state: PortfolioState;
  dispatch: React.Dispatch<PortfolioAction>;
  getSelectedTemplate: () => Template | undefined;
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

// Initial state
const initialState: PortfolioState = {
  portfolio: { ...defaultPortfolio },
  selectedTemplateId: templates[0].id,
  isModalOpen: false,
  currentSection: null,
  isDirty: false,
  savedPortfolios: [],
  isPreviewMode: false,
};

// Reducer function
const portfolioReducer = (state: PortfolioState, action: PortfolioAction): PortfolioState => {
  switch (action.type) {
    case 'SET_TEMPLATE':
      return {
        ...state,
        selectedTemplateId: action.templateId,
        isDirty: true,
      };
      
    case 'UPDATE_PORTFOLIO_SECTION':
      return {
        ...state,
        portfolio: {
          ...state.portfolio,
          [action.section]: action.data
        },
        isDirty: true,
      };
      
    case 'UPDATE_PORTFOLIO_ITEM': {
      const section = state.portfolio[action.section] as any[];
      const updatedSection = section.map(item => 
        item.id === action.itemId ? { ...item, ...action.data } : item
      );
      
      return {
        ...state,
        portfolio: {
          ...state.portfolio,
          [action.section]: updatedSection
        },
        isDirty: true,
      };
    }
    
    case 'ADD_PORTFOLIO_ITEM': {
      const section = state.portfolio[action.section] as any[];
      
      return {
        ...state,
        portfolio: {
          ...state.portfolio,
          [action.section]: [...section, action.item]
        },
        isDirty: true,
      };
    }
    
    case 'REMOVE_PORTFOLIO_ITEM': {
      const section = state.portfolio[action.section] as any[];
      const updatedSection = section.filter(item => item.id !== action.itemId);
      
      return {
        ...state,
        portfolio: {
          ...state.portfolio,
          [action.section]: updatedSection
        },
        isDirty: true,
      };
    }
    
    case 'RESET_PORTFOLIO':
      return {
        ...state,
        portfolio: { ...defaultPortfolio },
        isDirty: true,
      };
      
    case 'LOAD_PORTFOLIO':
      return {
        ...state,
        portfolio: action.portfolio,
        isDirty: false,
      };
      
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalOpen: action.isOpen,
        currentSection: action.section !== undefined ? action.section : state.currentSection,
      };
      
    case 'TOGGLE_PREVIEW_MODE':
      return {
        ...state,
        isPreviewMode: action.isPreview,
      };
      
    default:
      return state;
  }
};

// Provider component
export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(portfolioReducer, initialState);
  
  const getSelectedTemplate = () => {
    return templates.find(template => template.id === state.selectedTemplateId);
  };
  
  return (
    <PortfolioContext.Provider value={{ state, dispatch, getSelectedTemplate }}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Custom hook for using the portfolio context
export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
