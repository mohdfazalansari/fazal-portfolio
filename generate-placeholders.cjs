const fs = require('fs');
const zlib = require('zlib');

function createChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(4 + 4 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4);
  data.copy(buf, 8);
  const crc = crc32(buf.subarray(4, 8 + len));
  buf.writeUInt32BE(crc, 8 + len);
  return buf;
}

function crc32(buf) {
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function createProjectScreenshotPNG(width, height, titleText) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2; // RGB
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const ihdrChunk = createChunk('IHDR', ihdr);

  const lineLength = width * 3 + 1;
  const rawData = Buffer.alloc(lineLength * height);

  for (let y = 0; y < height; y++) {
    const offset = y * lineLength;
    rawData[offset] = 0; // filter byte

    for (let x = 0; x < width; x++) {
      const px = offset + 1 + x * 3;

      // Base background: #0e1118 (14, 17, 24)
      let r = 16, g = 19, b = 27;

      // Top title bar (y < 48)
      if (y < 48) {
        r = 22; g = 26; b = 36;
        // Mac window dots
        // Red dot: x: 28, y: 24, r: 6
        const d1 = (x - 30)**2 + (y - 24)**2;
        const d2 = (x - 52)**2 + (y - 24)**2;
        const d3 = (x - 74)**2 + (y - 24)**2;
        if (d1 < 36) { r = 239; g = 68; b = 68; }
        else if (d2 < 36) { r = 245; g = 158; b = 11; }
        else if (d3 < 36) { r = 16; g = 185; b = 129; }
      } else if (y === 48) {
        // Divider line
        r = 38; g = 44; b = 58;
      } else {
        // Subtle interior grid / mockup wireframe
        // Left sidebar wireframe (x < 240)
        if (x < 240) {
          r = 19; g = 23; b = 32;
          if (x === 239) { r = 38; g = 44; b = 58; }
          // sidebar menu items wireframe
          if (y > 70 && y < 78 && x > 28 && x < 180) { r = 45; g = 55; b = 75; }
          if (y > 95 && y < 103 && x > 28 && x < 150) { r = 35; g = 45; b = 60; }
          if (y > 120 && y < 128 && x > 28 && x < 170) { r = 35; g = 45; b = 60; }
          if (y > 145 && y < 153 && x > 28 && x < 130) { r = 35; g = 45; b = 60; }
        } else {
          // Main content area wireframe: cards
          // Card 1
          if (x > 270 && x < 700 && y > 80 && y < 220) {
            let isCardBorder = (x === 271 || x === 699 || y === 81 || y === 219);
            if (isCardBorder) { r = 38; g = 48; b = 65; }
            else { r = 22; g = 27; b = 38; }
            // Card inner bar
            if (y > 105 && y < 115 && x > 300 && x < 480) { r = 16; g = 185; b = 129; } // emerald
            if (y > 130 && y < 138 && x > 300 && x < 650) { r = 40; g = 50; b = 70; }
            if (y > 150 && y < 158 && x > 300 && x < 580) { r = 40; g = 50; b = 70; }
          }
          // Card 2
          if (x > 730 && x < 1160 && y > 80 && y < 220) {
            let isCardBorder = (x === 731 || x === 1159 || y === 81 || y === 219);
            if (isCardBorder) { r = 38; g = 48; b = 65; }
            else { r = 22; g = 27; b = 38; }
            if (y > 105 && y < 115 && x > 760 && x < 940) { r = 59; g = 130; b = 246; } // blue
            if (y > 130 && y < 138 && x > 760 && x < 1100) { r = 40; g = 50; b = 70; }
            if (y > 150 && y < 158 && x > 760 && x < 1040) { r = 40; g = 50; b = 70; }
          }
          // Big data table wireframe (y > 250 && y < 580 && x > 270 && x < 1160)
          if (x > 270 && x < 1160 && y > 250 && y < 580) {
            let isTableBorder = (x === 271 || x === 1159 || y === 251 || y === 579);
            if (isTableBorder) { r = 38; g = 48; b = 65; }
            else {
              r = 20; g = 24; b = 34;
              // Table header
              if (y < 290) { r = 26; g = 32; b = 45; }
              // Row lines
              if (y === 330 || y === 370 || y === 410 || y === 450 || y === 490 || y === 530) {
                r = 30; g = 36; b = 50;
              }
            }
          }
        }
      }

      rawData[px] = r;
      rawData[px + 1] = g;
      rawData[px + 2] = b;
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const idatChunk = createChunk('IDAT', compressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createProfilePortraitPNG(width, height) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2; // RGB
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const ihdrChunk = createChunk('IHDR', ihdr);

  const lineLength = width * 3 + 1;
  const rawData = Buffer.alloc(lineLength * height);

  const cx = width / 2;
  const cy = height * 0.42;

  for (let y = 0; y < height; y++) {
    const offset = y * lineLength;
    rawData[offset] = 0;

    for (let x = 0; x < width; x++) {
      const px = offset + 1 + x * 3;

      // Studio dark neutral background with subtle vignette
      const distFromCenter = Math.hypot(x - cx, y - cy);
      let bg = Math.max(18, 30 - Math.floor(distFromCenter * 0.035));
      let r = bg, g = bg + 2, b = bg + 6;

      // Head circle (center cx, cy - 40, radius 80)
      const headDist = Math.hypot(x - cx, y - (cy - 50));
      if (headDist < 85) {
        // Elegant silhouette tone
        r = 55; g = 62; b = 75;
      }

      // Shoulders / torso (y > cy + 30, ellipse)
      const shoulderX = (x - cx) / 160;
      const shoulderY = (y - (cy + 130)) / 110;
      if (shoulderX * shoulderX + shoulderY * shoulderY < 1 && y > cy + 20) {
        r = 45; g = 52; b = 65;
      }

      // Border highlight
      if (x < 2 || x >= width - 2 || y < 2 || y >= height - 2) {
        r = 40; g = 48; b = 60;
      }

      rawData[px] = r;
      rawData[px + 1] = g;
      rawData[px + 2] = b;
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const idatChunk = createChunk('IDAT', compressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Write the images
fs.writeFileSync('public/images/profile.jpg', createProfilePortraitPNG(600, 750));
fs.writeFileSync('public/images/projects/inventrack.png', createProjectScreenshotPNG(1200, 675, 'InvenTrack'));
fs.writeFileSync('public/images/projects/myfinancecoach.png', createProjectScreenshotPNG(1200, 675, 'MyFinanceCoach'));
fs.writeFileSync('public/images/projects/myblog.png', createProjectScreenshotPNG(1200, 675, 'MyBlog'));

console.log('Successfully generated sleek mockups for profile.jpg and project screenshots!');
