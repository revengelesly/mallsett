import Uppy from 'uppy/lib/core';
import Dashboard from 'uppy/lib/plugins/Dashboard';
import Tus from 'uppy/lib/plugins/Tus';

export default function uppyInit(options, onSuccess) {
  const uppy = Uppy({
    debug: false,
    autoProceed: options.autoProceed,
    restrictions: options.restrictions || ''
  });
  uppy.use(Tus, { endpoint: options.endpoint, resume: true });
  uppy.use(Dashboard, {
    trigger: options.trigger,
    inline: options.DashboardInline,
    target: options.target,
    note: options.restrictions || 'Images and video only, 300kb or less',
    showLinkToFileUploadResult: true,
    width: 750,
    height: 280,
    thumbnailWidth: 280,
  });

  uppy.on('complete', fileList => {
    onSuccess(fileList);
  });

  uppy.run();

  return uppy;
}
