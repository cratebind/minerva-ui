import React from 'react';
import { AppProvider } from '../components/AppContext';
import ThemeBuilder from '../components/ThemeBuilder';

export default function ThemeBuilderPage() {
  return (
    <AppProvider>
      <ThemeBuilder />
    </AppProvider>
  );
}
