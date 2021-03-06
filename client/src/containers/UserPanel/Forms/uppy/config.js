let config = {
  target: '#uppyHolder',
  endpoint: 'https://master.tus.io/files/',
  DashboardInline: true,
  Webcam: false,
  GoogleDrive: false,
  Dropbox: false,
  Instagram: false,
  autoProceed: true,
  restrictions: {
    maxFileSize: 3000000, // ~3mb
    maxNumberOfFiles: 1,
    minNumberOfFiles: 1,
    allowedFileTypes: ['image/*']
  },
  metaFields: [
    {
      id: 'resizeTo',
      name: 'Resize to',
      value: 1200,
      placeholder: 'specify future image size'
    },
    {
      id: 'description',
      name: 'Description',
      value: 'none',
      placeholder: 'describe what the file is for'
    }
  ]
};
export default config;
