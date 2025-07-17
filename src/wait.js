// Modernized version of waitForMSG
// Uses ES6+ syntax and best practices

/**
 * Polls the server for observation results and updates the UI accordingly.
 * @param {string} filename - The name of the file to check for results.
 * @returns {void}
 */
export function waitForMSG(filename) {
  $.ajax({
    url: `${urlPath}obsResult.php`,
    dataType: 'json',
    async: true,
    timeout: 150000,
    cache: false,
    data: { filename },
    success: (data) => {
      if (!data) {
        setTimeout(() => waitForMSG(filename), 10000);
      } else if (Array.isArray(data.obs) && data.obs.length === 0) {
        setDisplayTime();
        loading(false);
        setTimeout(() => {
          $.colorbox({
            href: `${urlPath}nohazard.php`,
            onLoad: () => $('#cboxClose').show(),
            onClosed: () => $('#cboxClose').hide(),
          });
        }, 1000);
      } else {
        createMap(data);
        loading(false);
      }
    },
    error: () => {
      setTimeout(() => waitForMSG(filename), 10000);
    },
  });
}

// For CommonJS compatibility
if (typeof module !== 'undefined') {
  module.exports = { waitForMSG };
}
