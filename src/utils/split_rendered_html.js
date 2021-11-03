const splitRenderedHtml = (html) => {
  const result = [];

  const sections = html.split(/(?=<h2>)/g);

  sections.forEach((section) => {
    const title = section.match(/(?<=<h2>).*(?=<\/h2>)/g);
    result.push({ title, html: section });
  });

  return result;
};

export default splitRenderedHtml;
