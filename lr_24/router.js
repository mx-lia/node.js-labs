const webdav = require("./webdav");
const router = require("express").Router();

router.post("/md/:dirname", webdav.createDirectory);
router.post("/rd/:dirname", webdav.deleteDirectory);
router.post("/up/:filename", webdav.uploadFile);
router.post("/down/:filename", webdav.downloadFile);
router.post("/del/:filename", webdav.deleteFile);
router.post("/copy/:sourcefile/:destfile", webdav.copyFile);
router.post("/move/:sourcefile/:destfile", webdav.moveFile);

module.exports = router;
