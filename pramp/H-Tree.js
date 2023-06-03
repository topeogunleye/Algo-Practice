const drawline = (x1, y1, x2, y2) => {
  console.log(x1, y1, x2, y2);

  // draw line
};

const drawHTree = (x, y, length, depth) => {

  if (depth === 0) return;

  // draw line
  drawline(x - length / 2, y, x + length / 2, y);

  // draw line
  drawline(x - length / 2, y - length / 2, x - length / 2, y + length / 2);

  // draw line
  drawline(x + length / 2, y - length / 2, x + length / 2, y + length / 2);

  // draw left H
  drawHTree(x - length / 2, y - length / 2, length / 2, depth - 1);

  // draw right H
  drawHTree(x + length / 2, y - length / 2, length / 2, depth - 1);

  // draw middle H
  drawHTree(x, y + length / 2, length / 2, depth - 1);
};


drawHTree(0, 0, 10, 2);
drawHTree(0, 0, 10, 3);
drawHTree(0, 0, 10, 4);
drawHTree(0, 0, 10, 5); 
drawHTree(0, 0, 10, 6);