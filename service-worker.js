self.addEventListener("install", () => {
  console.log("Service worker installed");
});

self.addEventListener("fetch", () => {
  // Empty handler lets the browser know this is a PWA
});
