const axios = require('axios');

exports.onCreatePage = async ({ page }) => {
  if (page.path === '/') {
    try {
      const data = await axios.get(
        'https://gitconnected.com/v1/portfolio/operel'
      );
      page.context = { data: data.data };
    } catch (err) {
      console.warn('Error fetching: ', err);
    }
  }
};
