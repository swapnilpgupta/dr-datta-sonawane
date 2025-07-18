
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Copy, CheckCircle, AlertTriangle } from 'lucide-react';
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

  const corsFixedCode = `function doPost(e) {
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
    
    // Create response with proper CORS headers
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Appointment data saved successfully'
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
  return ContentService.createTextOutput("GET method is working")
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

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-2xl text-red-800 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            CRITICAL: Update Your Google Apps Script
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-red-100 border border-red-300 rounded-lg p-4">
            <h3 className="font-semibold text-red-800 mb-2">Current Issue:</h3>
            <p className="text-red-700 text-sm">
              Your Google Apps Script is missing CORS headers. Even though you created a new deployment, the script code itself needs to be updated with proper CORS handling.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Replace Your Script Code</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Copy this CORS-enabled script and replace ALL your existing code:
                </p>
                <div className="relative">
                  <pre className="bg-gray-100 p-4 rounded-lg text-xs overflow-x-auto max-h-64">
                    <code>{corsFixedCode}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(corsFixedCode, 'CORS Fixed Script')}
                  >
                    {copied === 'CORS Fixed Script' ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Save and Deploy Again</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  After replacing the code:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• Click "Save" (Ctrl+S)</li>
                  <li>• Click "Deploy" → "New deployment"</li>
                  <li>• Choose "Web app" type</li>
                  <li>• Execute as: Me</li>
                  <li>• Who has access: Anyone</li>
                  <li>• Click "Deploy"</li>
                  <li><strong>• You can use the same URL: https://script.google.com/macros/s/AKfycbwU2xvCURay8MYPU5Y5cbuGNfC9vt5LZ8nF85bMziHHe0CkX8_NXcGrfkr4vyk-2jVltg/exec</strong></li>
                </ul>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Test the Updated Script</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Open your deployment URL in a browser - you should see "GET method is working"
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://script.google.com/macros/s/AKfycbwU2xvCURay8MYPU5Y5cbuGNfC9vt5LZ8nF85bMziHHe0CkX8_NXcGrfkr4vyk-2jVltg/exec', '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Test Your Script
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">
            What's Different in This Fix?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">CORS Headers Added:</h3>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Access-Control-Allow-Origin: * (allows all domains)</li>
              <li>• Access-Control-Allow-Methods: GET, POST, OPTIONS</li>
              <li>• Access-Control-Allow-Headers: Content-Type</li>
              <li>• Added doOptions() function for preflight requests</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">Your Google Sheet:</h3>
            <p className="text-green-700 text-sm mb-3">
              Once the script is updated, data will flow here automatically.
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

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-semibold text-yellow-800 mb-2">Important:</h3>
            <p className="text-yellow-700 text-sm">
              You must update the script code AND save it before the form will work. Creating a new deployment alone won't fix the CORS issue - the code itself needs the CORS headers.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoogleSheetsSetup;
