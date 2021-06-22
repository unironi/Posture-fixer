import * as posenet from "@tensorflow-models/posenet";
const net = await posenet.load();

const imageScaleFactor = 0.5;
const flipHorizontal = false;
const outputStride = 16;
// get up to 5 poses
const maxPoseDetections = 5;
// minimum confidence of the root part of a pose
const scoreThreshold = 0.5;
// minimum distance in pixels between the root parts of poses
const nmsRadius = 20;
const imageElement = document.getElementById("cat");
// load posenet
const net = await posenet.load();
const poses = await net.estimateMultiplePoses(
  imageElement,
  imageScaleFactor,
  flipHorizontal,
  outputStride,
  maxPoseDetections,
  scoreThreshold,
  nmsRadius
);
