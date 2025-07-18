
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { ExternalLink, Copy, CheckCircle, AlertTriangle, Sheet, Code, Link } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const GoogleSheetsSetup = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [sheetId, setSheetId] = useState('');
  const [webAppUrl, setWebAppUrl] = useState('');
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

  const generateAppsScript = (spreadsheetId: string) => {
    return `function doPost(e) {
  try {
    // Get the spreadsheet by ID
    const spreadsheetId = '${spreadsheetId}';
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
    
    // Create response with proper CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Appointment data saved successfully',
      rowNumber: sheet.getLastRow()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
  }
}

function doGet(e) {
  return ContentService.createTextOutput("Appointment system is working! ✅")
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

function doOptions(e) {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}`;
  };

  const handleSheetIdChange = (value: string) => {
    setSheetId(value);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800 flex items-center">
            <Sheet className="mr-2 h-5 w-5" />
            Complete Google Sheets Setup Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">What We're Building:</h3>
            <p className="text-blue-700 text-sm">
              A Google Sheet that automatically receives appointment data from your website form. 
              When someone books an appointment, their details will be added as a new row in your sheet.
            </p>
          </div>

          {/* Step 1: Create Google Sheet */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Create Your Google Sheet</h4>
                <div className="space-y-3">
                  <Button 
                    onClick={() => window.open('https://sheets.google.com', '_blank')}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open Google Sheets
                  </Button>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <p className="font-medium mb-2">Instructions:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Click "Blank" to create a new spreadsheet</li>
                      <li>• Rename it to "Dr. Datta Sonawane - Appointments"</li>
                      <li>• Add these headers in row 1: Timestamp, Name, Phone, Email, Treatment, Date, Time, Message, Status</li>
                      <li>• Copy the Sheet ID from the URL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Enter Sheet ID */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Enter Your Google Sheet ID</h4>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="sheet-id">Sheet ID (from the URL between /d/ and /edit)</Label>
                    <Input
                      id="sheet-id"
                      value={sheetId}
                      onChange={(e) => handleSheetIdChange(e.target.value)}
                      placeholder="1gdmTA1o344ef15dnFKeovXMFQoQ-Y2o3j2UCX_8z0XU"
                      className="mt-1"
                    />
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-sm">
                    <p className="text-yellow-800">
                      <strong>Example URL:</strong> https://docs.google.com/spreadsheets/d/<span className="bg-yellow-200 px-1">1gdmTA1o344ef15dnFKeovXMFQoQ-Y2o3j2UCX_8z0XU</span>/edit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Apps Script Code */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Setup Google Apps Script</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <p className="font-medium mb-2">Instructions:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• In your Google Sheet, go to Extensions → Apps Script</li>
                      <li>• Delete all existing code</li>
                      <li>• Paste the code below</li>
                      <li>• Save the project (Ctrl+S)</li>
                    </ul>
                  </div>
                  
                  {sheetId && (
                    <div className="relative">
                      <pre className="bg-gray-100 p-4 rounded-lg text-xs overflow-x-auto max-h-96">
                        <code>{generateAppsScript(sheetId)}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2"
                        onClick={() => copyToClipboard(generateAppsScript(sheetId), 'Apps Script Code')}
                      >
                        {copied === 'Apps Script Code' ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  )}
                  
                  {!sheetId && (
                    <div className="bg-orange-50 border border-orange-200 rounded p-3">
                      <p className="text-orange-800 text-sm">
                        Please enter your Sheet ID above to generate the custom Apps Script code.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Step 4: Deploy */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Deploy as Web App</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <p className="font-medium mb-2">Deployment Steps:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Click "Deploy" → "New deployment"</li>
                      <li>• Choose type: "Web app"</li>
                      <li>• Execute as: "Me"</li>
                      <li>• Who has access: "Anyone"</li>
                      <li>• Click "Deploy"</li>
                      <li>• Copy the Web App URL</li>
                    </ul>
                  </div>
                  
                  <div>
                    <Label htmlFor="webapp-url">Your Web App URL</Label>
                    <Input
                      id="webapp-url"
                      value={webAppUrl}
                      onChange={(e) => setWebAppUrl(e.target.value)}
                      placeholder="https://script.google.com/macros/s/..."
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5: Test */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                5
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Test Your Setup</h4>
                <div className="space-y-3">
                  {webAppUrl && (
                    <Button 
                      variant="outline"
                      onClick={() => window.open(webAppUrl, '_blank')}
                      className="w-full"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Test Your Web App
                    </Button>
                  )}
                  
                  <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                    <p className="text-green-800">
                      <strong>Expected Result:</strong> You should see "Appointment system is working! ✅"
                    </p>
                  </div>

                  {sheetId && (
                    <Button 
                      variant="outline"
                      onClick={() => window.open(`https://docs.google.com/spreadsheets/d/${sheetId}/edit`, '_blank')}
                      className="w-full"
                    >
                      <Sheet className="mr-2 h-4 w-4" />
                      Open Your Google Sheet
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Configuration Summary */}
      {sheetId && webAppUrl && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-xl text-green-800 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              Ready to Update Your Website
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-100 border border-green-300 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Your Configuration:</h3>
              <div className="space-y-2 text-green-700 text-sm">
                <p><strong>Sheet ID:</strong> {sheetId}</p>
                <p><strong>Web App URL:</strong> {webAppUrl}</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Next Step:</h3>
              <p className="text-blue-700 text-sm">
                Tell me "Update the appointment form with my new Google Sheet URL" and I'll integrate it into your website.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-foreground">
            Troubleshooting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Authorization Required</h4>
                <p className="text-sm text-muted-foreground">
                  When you first deploy, Google will ask for permissions. Click "Review permissions" and authorize the script.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">CORS Issues</h4>
                <p className="text-sm text-muted-foreground">
                  The provided script includes all necessary CORS headers. Make sure you copied the complete code.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">Testing</h4>
                <p className="text-sm text-muted-foreground">
                  Always test your Web App URL in a browser first. You should see the success message before integrating.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleSheetsSetup;
