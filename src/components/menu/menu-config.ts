const config = [
  {
    "id": 0,
    "type": "header",
    "title": "Upload using remote urls",
    "description": "# Upload using remote urls\nUpload using remote urls is common when implementing within a back end service or when creating an integration with a third party service.\n\n`video.asset.created` is called after performing the [Create an asset](https://docs.mux.com/reference#create-an-asset) API request.  This event will contain the `playback_id` which is used during playback.\n\n`video.asset.ready` is sent when the asset has been processed and is ready for client playback."
  },
  {
    "type": "item",
    "title": "video.asset.created",
    "file": "video.asset.created"
  },
  {
    "type": "item",
    "title": "video.asset.ready",
    "file": "video.asset.ready"
  },
  {
    "id": 1,
    "type": "header",
    "title": "Direct uploads",
    "description": "# Direct Uploads\n\nDirect Uploads is commonly used when a UI is created for manual upload of a video file to Mux.\n\nWhen performing Direct Uploads, the same `video.asset.created` and `video.asset.ready` events are fired.  However, `video.upload.created` and `video.upload.asset_created` events are also sent along in this upload lifecycle.\n\nThe `video.upload.created` contains an `id` value that represents the upload job and that can be used to compare subsequent upload events for progress tracking.  The `video.asset.created` will contain the `playback_id` that gets used for playback (when the asset is done being uploaded and processed).\n\n`video.asset.ready` is sent when the asset has been processed and is ready for client playback."
  },
  {
    "type": "item",
    "title": "video.upload.created",
    "file": "video.upload.created"
  },
  {
    "type": "item",
    "title": "video.asset.created",
    "file": "video.asset.created"
  },
  {
    "type": "item",
    "title": "video.upload.asset_created",
    "file": "video.upload.asset_created"
  },
  {
    "type": "item",
    "title": "video.asset.ready",
    "file": "video.asset.ready"
  }
];

export default config;
