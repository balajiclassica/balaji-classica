/**
 * GOOGLE APPS SCRIPT SETUP INSTRUCTIONS:
 * 
 * Step 1: Open Google Sheets (https://sheets.new)
 * Step 2: Add these column headers in Row 1:
 *         A1: Timestamp | B1: Name | C1: Phone | D1: Email
 * Step 3: Extensions -> Apps Script
 * Step 4: Delete existing code and paste the following:
 * 
 * ```javascript
 * function doPost(e) {
 *   try {
 *     var data = JSON.parse(e.postData.contents);
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
 *     
 *     // If sheet is empty, add headers
 *     if (sheet.getLastRow() === 0) {
 *       sheet.appendRow(["Timestamp", "Name", "Phone", "Email"]);
 *     }
 *     
 *     sheet.appendRow([
 *       new Date().toLocaleString(),
 *       data.name,
 *       data.phone,
 *       data.email
 *     ]);
 *     
 *     return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } catch (error) {
 *     return ContentService.createTextOutput(JSON.stringify({ result: "error", error: error.message }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 * 
 * function doGet(e) {
 *   return ContentService.createTextOutput("Balaji Classica Enquiry API is active.")
 *     .setMimeType(ContentService.MimeType.TEXT);
 * }
 * ```
 * 
 * Step 5: Click 'Deploy' -> 'New Deployment'
 * Step 6: Select 'Web App'
 * Step 7: Set 'Execute as' to 'Me' and 'Who has access' to 'Anyone'
 * Step 8: Click 'Deploy', authorize permissions, and copy the 'Web App URL'
 * Step 9: Replace the GOOGLE_SHEET_URL constant below with your URL.
 */

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxxGUFp2HdXdivJ6tMpMjcGN8WsZIP5t18x-xGmgF0KI2GbXYO76dByQNZQWOOZKw0/exec";

export interface EnquiryData {
  name: string;
  phone: string;
  email: string;
}

export async function submitEnquiry(data: EnquiryData) {
  try {
    await fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        timestamp: new Date().toISOString(),
      }),
    });

    // With no-cors, we can't read the response, so we assume success if no error
    return { success: true };
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, error };
  }
}
