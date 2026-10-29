/**
 * Portfolio content configuration.
 *
 * To switch to a different resume, replace only `driveFileId` with the ID from:
 * https://drive.google.com/file/d/DRIVE_FILE_ID/view
 *
 * The Google Drive file must be shared as "Anyone with the link — Viewer".
 */
window.PORTFOLIO_CONFIG = Object.freeze({
  resume: {
    driveFileId: "18nD1o8-vCrrCpr02YyhFBAQkelzMrFNo",
    fileName: "Palash_Bharati_Resume.pdf",
  },
  analytics: {
    provider: "umami",
    scriptUrl: "https://cloud.umami.is/script.js",
    // Paste the Website ID from Umami Cloud here to activate analytics.
    websiteId: "3f1197d7-2003-4e13-a5db-a29c69b3af06",
    // Prevent local development visits from appearing in production analytics.
    domains: ["palash1912.github.io"],
  },
});
