
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const GoogleSheetsSetup = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
    setTimeout(() => setCopied(null), 2000);
  };

  const appsScriptCode = `function doPost(e) {
  try {
    // Get the spreadsheet by ID
    const spreadsheetId = '1gdmTA1o344ef15dnFKeovXMFQoQ-Y2o3j2UCX_8z0XU';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 9).setValues([[
        'Timestamp', 'Name', 'Phone', 'Email', 'Treatment', 'Date', 'Time', 'Message', 'Status'
      ]]);
    }
    
    // Add the new appointment data
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.phone,
      data.email,
      data.treatment,
      data.date,
      data.time,
      data.message,
      data.status
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Appointment data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}`;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">
            Google Sheets Integration Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">Quick Setup Steps:</h3>
            <p className="text-blue-700 text-sm">
              Follow these steps to connect your appointment form to Google Sheets automatically.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Open Google Apps Script</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Go to script.google.com and create a new project
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://script.google.com', '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Apps Script
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Copy and Paste the Code</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Replace the default code with this appointment handler:
                </p>
                <div className="relative">
                  <pre className="bg-gray-100 p-4 rounded-lg text-xs overflow-x-auto max-h-64">
                    <code>{appsScriptCode}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(appsScriptCode, 'Apps Script Code')}
                  >
                    {copied === 'Apps Script Code' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Deploy as Web App</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Click "Deploy" → "New deployment" → Choose "Web app" type
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Execute as: Me</li>
                  <li>• Who has access: Anyone</li>
                  <li>• Click "Deploy"</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Update the Website Code</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Copy your Web App URL and replace the GOOGLE_SHEETS_URL in the Appointment component:
                </p>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <code>const GOOGLE_SHEETS_URL = 'YOUR_WEB_APP_URL_HERE';</code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Your Google Sheet:</h3>
            <p className="text-green-700 text-sm mb-3">
              The appointment data will be saved to your specified Google Sheet automatically.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('https://docs.google.com/spreadsheets/d/1gdmTA1o344ef15dnFKeovXMFQoQ-Y2o3j2UCX_8z0XU/edit', '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Open Your Google Sheet
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleSheetsSetup;
