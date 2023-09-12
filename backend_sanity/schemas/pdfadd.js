const pdfadd={
    name: 'webPage',
    type: 'document',
    title: 'Web Page',
    fields: [
      {
        name: 'pdfFile',
        type: 'file',
        title: 'PDF File',
        options: {
          accept: '.pdf', // Specify that only PDF files are allowed
        },
      },
      // Other fields for your web page content
    ],
  };

  export default pdfadd;