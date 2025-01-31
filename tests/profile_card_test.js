const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
const dom = new JSDOM(html);
const document = dom.window.document;

function testElementExists(testId, expectedText = null) {
  const element = document.querySelector(`[data-testid="${testId}"]`);
  if (!element) {
    console.error(
      `Test failed: Element with data-testid="${testId}" not found.`
    );
  } else if (expectedText && !element.textContent.includes(expectedText)) {
    console.error(
      `Test failed: Element with data-testid="${testId}" does not contain expected text "${expectedText}".`
    );
  } else {
    console.log(
      `Test passed: Element with data-testid="${testId}" exists${
        expectedText ? " and contains expected text." : "."
      }`
    );
  }
}

testElementExists("profilePicture");
testElementExists("fullName", "Salaudeen Olanrewaju");
testElementExists("jobTitle", "Front-End Developer");
testElementExists(
  "shortBio",
  "Olanrewaju is a former Medical Laboratory Scientist"
);
testElementExists("currentLocation", "Ibadan Oyo state");
testElementExists("emailAddress", "salaudeenwarees9@gmail.com");
testElementExists("socialLinks");
testElementExists("currentTimeUTC");

// RUN THIS TEST WITH node tests/profile_card_test.js in your terminal.
