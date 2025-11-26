import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Accordion } from 'primereact/accordion';

// Type definitions for Theneo data
interface TheneoEndpoint {
  name: string;
  slug: string;
  children: TheneoEndpoint[];
  isHeader: boolean;
  externalPageLink: string;
  isNewTab: boolean;
}

interface TheneoSection {
  name: string;
  slug: string;
  children: TheneoEndpoint[];
  isHeader: boolean;
  externalPageLink: string;
  isNewTab: boolean;
}

interface TheneoData {
  id: string;
  name: string;
  lastExport: string;
  baseUrl: string;
  sections: TheneoSection[];
}

function App() {
  const [projectName, setProjectName] = useState<string | null>(null);
  const [lastExportTime, setLastExportTime] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [sections, setSections] = useState<TheneoSection[]>([]);

  // Function to convert UTC to EST and format
  const formatToEST = (utcDateString: string): string => {
    const date = new Date(utcDateString);
    
    // Format date part: "November 26, 2025"
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'America/New_York'
    });
    
    // Format time part: "11:06:02 AM"
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'America/New_York'
    });
    
    const formattedDate = dateFormatter.format(date);
    const formattedTime = timeFormatter.format(date);
    
    return `${formattedDate} — ${formattedTime} EST`;
  };

  const handleLoadTheneoJson = async () => {
    try {
      const response = await fetch('/api/wex-health/theneo.json');
      const data: TheneoData = await response.json();
      console.log('Theneo JSON Data:', data);
      setProjectName(data.name);
      setLastExportTime(data.lastExport ? formatToEST(data.lastExport) : null);
      setSections(data.sections || []);
    } catch (error) {
      console.error('Error loading theneo.json:', error);
    }
  };

  // Load theneo.json on component mount
  useEffect(() => {
    handleLoadTheneoJson();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
          React template (PrimeReact 11)
        </h1>
        
        {projectName && (
          <div className="mb-6 text-center space-y-2">
            <p className="text-xl text-gray-700">
              <span className="font-semibold">Project Name:</span> {projectName}
            </p>
            {lastExportTime && (
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Last Export Time:</span> {lastExportTime}
              </p>
            )}
          </div>
        )}
        
        <div className="mb-6 flex flex-col gap-2 max-w-md mx-auto">
          <label htmlFor="text-input" className="text-left text-gray-700">
            Enter text:
          </label>
          <InputText 
            id="text-input"
            value={inputValue} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            placeholder="Type something..."
            className="w-full"
          />
        </div>
        
        <div className="mb-6 text-center">
          <Button onClick={handleLoadTheneoJson} severity="secondary">
            <i className="pi pi-file" />
            Reload Theneo JSON
          </Button>
        </div>

        {/* API Sections and Endpoints */}
        {sections.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">API Endpoints</h2>
            <Accordion className="border border-gray-200 rounded-md divide-y divide-gray-200">
              {sections.map((section) => (
                section.children.length > 0 && (
                  <Accordion.Panel key={section.slug} value={section.slug}>
                    <Accordion.Header className="bg-transparent py-3.5">
                      <span className="flex items-center gap-4">
                        <i className="pi pi-folder text-blue-500"></i>
                        <span className="font-semibold text-lg">{section.name}</span>
                        <span className="text-sm text-gray-500">({section.children.length} endpoints)</span>
                      </span>
                      <Accordion.HeaderIndicator />
                    </Accordion.Header>
                    <Accordion.Content className="bg-gray-50 px-4 pb-3.5">
                      <ul className="space-y-2">
                        {section.children.map((endpoint) => (
                          <li key={endpoint.slug} className="flex items-center gap-3 p-2 hover:bg-white rounded transition-colors">
                            <i className="pi pi-link text-green-500"></i>
                            <span className="text-gray-700">{endpoint.name}</span>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Content>
                  </Accordion.Panel>
                )
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;