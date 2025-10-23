import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import InputNumberDemo from './examples/InputNumber';

function App() {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          PrimeReact Components Demo
        </h1>

        {/* Button Examples */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Button Component</h2>
          
          {/* Severity */}
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Severity</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <Button>Primary</Button>
            <Button severity="secondary">Secondary</Button>
            <Button severity="success">Success</Button>
            <Button severity="info">Info</Button>
            <Button severity="warn">Warn</Button>
            <Button severity="help">Help</Button>
            <Button severity="danger">Danger</Button>
            <Button severity="contrast">Contrast</Button>
          </div>

          {/* Icons */}
          <h3 className="text-sm font-semibold text-gray-600 mb-2">With Icons</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <Button>
              <i className="pi pi-check" />
              Submit
            </Button>
            <Button>
              Save
              <i className="pi pi-save" />
            </Button>
            <Button iconOnly rounded aria-label="Favorite">
              <i className="pi pi-heart" />
            </Button>
          </div>

          {/* Variants */}
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Variants</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
            <Button raised>Raised</Button>
            <Button rounded>Rounded</Button>
          </div>

          {/* Sizes */}
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Sizes</h3>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Button size="small">
              <i className="pi pi-check" />
              Small
            </Button>
            <Button>
              <i className="pi pi-check" />
              Normal
            </Button>
            <Button size="large">
              <i className="pi pi-check" />
              Large
            </Button>
          </div>

          {/* Button Group */}
          <h3 className="text-sm font-semibold text-gray-600 mb-2">Button Group</h3>
          <div className="flex gap-3">
            <Button.Group>
              <Button>
                <i className="pi pi-check" />
                Save
              </Button>
              <Button>
                <i className="pi pi-trash" />
                Delete
              </Button>
              <Button>
                <i className="pi pi-times" />
                Cancel
              </Button>
            </Button.Group>
          </div>
        </div>

        {/* InputText Examples */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">InputText Component</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="font-medium text-gray-700">
                Username
              </label>
              <InputText 
                id="username"
                value={inputValue} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} 
                placeholder="Enter your username"
                className="w-full md:w-80"
              />
              <small className="text-gray-500">
                Current value: {inputValue || '(empty)'}
              </small>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-3">Different Sizes</h3>
              <div className="flex flex-col gap-3 items-start">
                <div className="flex items-center gap-3">
                  <span className="w-20 text-sm text-gray-600">Small:</span>
                  <InputText 
                    type="text" 
                    className="p-inputtext-sm w-64" 
                    placeholder="Small input" 
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-20 text-sm text-gray-600">Normal:</span>
                  <InputText 
                    type="text" 
                    className="w-64"
                    placeholder="Normal input" 
                  />
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-20 text-sm text-gray-600">Large:</span>
                  <InputText 
                    type="text" 
                    className="p-inputtext-lg w-64" 
                    placeholder="Large input" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Checkbox Examples */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Checkbox Component</h2>
          <div className="card flex items-center justify-center">
                <div className="flex items-center gap-2">
                    <Checkbox inputId="basic-checkbox" />
                    <label htmlFor="basic-checkbox">
                        I accept the <a className="font-semibold">Terms of Service</a>
                    </label>
                </div>
          </div>
        </div>

        {/* InputNumber Examples */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">InputNumber Component</h2>
          <InputNumberDemo />
        </div>

      </div>

    </div>
  );
}

export default App;